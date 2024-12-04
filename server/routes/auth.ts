/*import express from 'express';
import { z } from 'zod';
import db from '../database/init';
import { hashPassword, comparePasswords, generateToken } from '../utils/auth';

const router = express.Router();

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = loginSchema.parse(req.body);
    
    const user = db.prepare('SELECT * FROM users WHERE email = ?').get(email);
    
    if (!user || !comparePasswords(password, user.password)) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = generateToken(user.id);
    
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
    res.status(400).json({ error: 'Invalid request' });
  }
});

export const authRouter = router;*/