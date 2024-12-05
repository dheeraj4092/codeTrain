import express from 'express';
import { z } from 'zod';
import multer from 'multer';
import path from 'path';
import db from '../database/init';
import { authenticateToken } from '../utils/auth';

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

// Define types for the student and file
interface Student {
  id: number;
  name: string;
  email: string;
  enrollment_date: string;
  enrolled_courses: string;
  enrolledCourses: string[];
}

// Get all students
router.get('/students', authenticateToken, (req, res) => {
  const students = db.prepare(`
    SELECT u.id, u.name, u.email, u.created_at as enrollment_date,
    GROUP_CONCAT(c.title) as enrolled_courses
    FROM users u
    LEFT JOIN enrollments e ON u.id = e.user_id
    LEFT JOIN courses c ON e.course_id = c.id
    WHERE u.role = 'student'
    GROUP BY u.id
  `).all() as Student[];

  const formattedStudents = students.map(student => ({
    ...student,
    enrolledCourses: student.enrolled_courses ? student.enrolled_courses.split(',') : []
  }));

  res.json(formattedStudents);
});

// Upload course materials
router.post('/materials/upload', authenticateToken, upload.array('files'), async (req, res) => {
  try {
    const { courseId, title } = req.body;
    const files = req.files as Express.Multer.File[];

    if (!files || files.length === 0) {
      return res.status(400).json({ error: 'No files uploaded' });
    }

    // Save file information to database
    const stmt = db.prepare(`
      INSERT INTO course_materials (course_id, title, file_url, file_type, file_size)
      VALUES (?, ?, ?, ?, ?)
    `);

    files.forEach(file => {
      stmt.run(
        courseId,
        title,
        file.path,
        path.extname(file.originalname),
        `${(file.size / 1024 / 1024).toFixed(2)} MB`
      );
    });

    res.json({ message: 'Materials uploaded successfully' });
  } catch (error) {
    console.error('Error uploading materials:', error);
    res.status(500).json({ error: 'Failed to upload materials' });
  }
});

export const adminRouter = router;
