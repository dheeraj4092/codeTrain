/*import express from 'express';
import db from '../database/init';
import { authenticateToken } from '../utils/auth';

const router = express.Router();

// Get enrolled courses
router.get('/courses', authenticateToken, (req, res) => {
  const courses = db.prepare(`
    SELECT c.*, e.enrolled_at
    FROM courses c
    JOIN enrollments e ON c.id = e.course_id
    WHERE e.user_id = ?
  `).all(req.user.userId);

  res.json(courses);
});

// Get course lectures
router.get('/courses/:courseId/lectures', authenticateToken, (req, res) => {
  const lectures = db.prepare(`
    SELECT *
    FROM lectures
    WHERE course_id = ?
    ORDER BY lecture_date DESC
  `).all(req.params.courseId);

  res.json(lectures);
});

// Get course materials
router.get('/courses/:courseId/materials', authenticateToken, (req, res) => {
  const materials = db.prepare(`
    SELECT *
    FROM course_materials
    WHERE course_id = ?
    ORDER BY uploaded_at DESC
  `).all(req.params.courseId);

  res.json(materials);
});

export const portalRouter = router;*/