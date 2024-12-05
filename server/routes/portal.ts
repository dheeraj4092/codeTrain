import express from 'express';
import db from '../database/init';
import { authenticateToken } from '../utils/auth';

const router = express.Router();

// Get enrolled courses for the authenticated user
router.get('/courses', authenticateToken, (req, res) => {
  if (!req.user || !req.user.userId) {
    return res.status(401).json({ error: 'Authentication required' });
  }

  const userId = req.user.userId;

  try {
    const courses = db.prepare(`
      SELECT c.*, e.enrolled_at
      FROM courses c
      JOIN enrollments e ON c.id = e.course_id
      WHERE e.user_id = ?
    `).all(userId);

    res.json(courses);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch enrolled courses' });
  }
});

// Get lectures for a specific course
router.get('/courses/:courseId/lectures', authenticateToken, (req, res) => {
  const { courseId } = req.params;

  try {
    const lectures = db.prepare(`
      SELECT *
      FROM lectures
      WHERE course_id = ?
      ORDER BY lecture_date DESC
    `).all(courseId);

    res.json(lectures);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch lectures' });
  }
});

// Get materials for a specific course
router.get('/courses/:courseId/materials', authenticateToken, (req, res) => {
  const { courseId } = req.params;

  try {
    const materials = db.prepare(`
      SELECT *
      FROM course_materials
      WHERE course_id = ?
      ORDER BY uploaded_at DESC
    `).all(courseId);

    res.json(materials);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch materials' });
  }
});

export const portalRouter = router;
