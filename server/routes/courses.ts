/*import express from 'express';
import { z } from 'zod';
import db from '../database/init';
import { authenticateToken } from '../utils/auth';

const router = express.Router();

// Get all courses
router.get('/', (req, res) => {
  const courses = db.prepare(`
    SELECT c.*, u.name as instructor_name, u.email as instructor_email
    FROM courses c
    JOIN users u ON c.instructor_id = u.id
  `).all();

  const coursesWithTopics = courses.map(course => {
    const topics = db.prepare('SELECT topic FROM course_topics WHERE course_id = ?')
      .all(course.id)
      .map(t => t.topic);

    return { ...course, topics };
  });

  res.json(coursesWithTopics);
});

// Get course by ID
router.get('/:id', (req, res) => {
  const course = db.prepare(`
    SELECT c.*, u.name as instructor_name, u.email as instructor_email
    FROM courses c
    JOIN users u ON c.instructor_id = u.id
    WHERE c.id = ?
  `).get(req.params.id);

  if (!course) {
    return res.status(404).json({ error: 'Course not found' });
  }

  const topics = db.prepare('SELECT topic FROM course_topics WHERE course_id = ?')
    .all(course.id)
    .map(t => t.topic);

  res.json({ ...course, topics });
});

// Enroll in a course
router.post('/:id/enroll', authenticateToken, (req, res) => {
  const { id } = req.params;
  const userId = req.user.userId;

  try {
    db.prepare(`
      INSERT INTO enrollments (user_id, course_id)
      VALUES (?, ?)
    `).run(userId, id);

    res.json({ message: 'Successfully enrolled in course' });
  } catch (error) {
    res.status(400).json({ error: 'Failed to enroll in course' });
  }
});

export const coursesRouter = router;*/