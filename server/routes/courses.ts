import express from 'express';
import { z } from 'zod';
import db from '../database/init';
import { authenticateToken } from '../utils/auth';
import { RequestWithUser } from '../types';


const router = express.Router();

// Define types for course and topic
interface Course {
  id: number;
  title: string;
  description: string;
  instructor_id: number;
  instructor_name: string;
  instructor_email: string;
}

interface Topic {
  topic: string;
}

// Zod schema for request validation (if needed in future endpoints)
const courseEnrollmentSchema = z.object({
  id: z.string().uuid(),
});

// Get all courses
router.get('/', (req, res) => {
  try {
    const courses = db.prepare(`
      SELECT c.*, u.name as instructor_name, u.email as instructor_email
      FROM courses c
      JOIN users u ON c.instructor_id = u.id
    `).all() as Course[];

    const coursesWithTopics = courses.map(course => {
      const topics = db.prepare('SELECT topic FROM course_topics WHERE course_id = ?')
        .all(course.id) as Topic[];
      return { ...course, topics: topics.map(t => t.topic) };
    });

    res.json(coursesWithTopics);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch courses' });
  }
});

// Get course by ID
router.get('/:id', (req, res) => {
  const { id } = req.params;

  try {
    const course = db.prepare(`
      SELECT c.*, u.name as instructor_name, u.email as instructor_email
      FROM courses c
      JOIN users u ON c.instructor_id = u.id
      WHERE c.id = ?
    `).get(id) as Course | undefined;

    if (!course) {
      return res.status(404).json({ error: 'Course not found' });
    }

    const topics = db.prepare('SELECT topic FROM course_topics WHERE course_id = ?')
      .all(course.id) as Topic[];

    res.json({ ...course, topics: topics.map(t => t.topic) });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch course details' });
  }
});

// Enroll in a course
router.post('/:id/enroll', authenticateToken, (req: RequestWithUser, res) => {
  const { id } = req.params;

  if (!req.user || !req.user.userId) {
    return res.status(401).json({ error: 'Authentication required' });
  }

  const userId = req.user.userId;

  try {
    db.prepare(`
      INSERT INTO enrollments (user_id, course_id)
      VALUES (?, ?)
    `).run(userId, id);

    res.json({ message: 'Successfully enrolled in course' });
  } catch (error) {
    res.status(400).json({ error: 'Failed to enroll in course. You might already be enrolled.' });
  }
});

export const coursesRouter = router;
