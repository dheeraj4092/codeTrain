import express from 'express';
import { z } from 'zod';
import db from '../database/init';
import { hashPassword, comparePasswords, generateToken } from '../utils/auth';

const router = express.Router();

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  role: string;
}

router.post('/login', async (req, res) => {
  try {
    // Validate request body
    const { email, password } = loginSchema.parse(req.body);
    
    // Query the database
    const user = db.prepare('SELECT * FROM users WHERE email = ?').get(email) as User | undefined;
    
    // Check if user exists and passwords match
    if (!user || !comparePasswords(password, user.password)) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Generate token
    const token = generateToken(user.id);
    
    // Respond with user data and token
    res.json({
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.error(error); // Log error for debugging
    res.status(400).json({ error: 'Invalid request' });
  }
});

export const authRouter = router;
