/*import Database from 'better-sqlite3';
import { hashPassword } from '../utils/auth';

const db = new Database('education.db');

export function initializeDatabase() {
  // Users table
  db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT UNIQUE NOT NULL,
      password TEXT NOT NULL,
      role TEXT NOT NULL DEFAULT 'student',
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // Courses table
  db.exec(`
    CREATE TABLE IF NOT EXISTS courses (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      description TEXT NOT NULL,
      duration TEXT NOT NULL,
      level TEXT NOT NULL,
      price REAL NOT NULL,
      instructor_id INTEGER,
      image_url TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (instructor_id) REFERENCES users (id)
    )
  `);

  // Course topics table
  db.exec(`
    CREATE TABLE IF NOT EXISTS course_topics (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      course_id INTEGER NOT NULL,
      topic TEXT NOT NULL,
      FOREIGN KEY (course_id) REFERENCES courses (id)
    )
  `);

  // Enrollments table
  db.exec(`
    CREATE TABLE IF NOT EXISTS enrollments (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER NOT NULL,
      course_id INTEGER NOT NULL,
      enrolled_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (user_id) REFERENCES users (id),
      FOREIGN KEY (course_id) REFERENCES courses (id)
    )
  `);

  // Lectures table
  db.exec(`
    CREATE TABLE IF NOT EXISTS lectures (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      course_id INTEGER NOT NULL,
      title TEXT NOT NULL,
      video_url TEXT,
      duration TEXT,
      lecture_date DATETIME,
      FOREIGN KEY (course_id) REFERENCES courses (id)
    )
  `);

  // Course materials table
  db.exec(`
    CREATE TABLE IF NOT EXISTS course_materials (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      course_id INTEGER NOT NULL,
      title TEXT NOT NULL,
      file_url TEXT NOT NULL,
      file_type TEXT NOT NULL,
      file_size TEXT NOT NULL,
      uploaded_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (course_id) REFERENCES courses (id)
    )
  `);

  // Insert demo user if not exists
  const demoUser = db.prepare('SELECT id FROM users WHERE email = ?').get('john@example.com');
  if (!demoUser) {
    const hashedPassword = hashPassword('password');
    db.prepare(`
      INSERT INTO users (name, email, password, role)
      VALUES (?, ?, ?, ?)
    `).run('John Doe', 'john@example.com', hashedPassword, 'student');
  }
}

export default db;*/