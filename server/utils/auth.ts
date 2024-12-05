import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { Request, Response, NextFunction } from 'express';

const JWT_SECRET = process.env.JWT_SECRET || 'Q6UMBQxzXzMBkSsGwP7cHymzik2Ndlq4qepgQZDKolQ';

export function hashPassword(password: string): string {
  return bcrypt.hashSync(password, 10);
}

export function comparePasswords(password: string, hash: string): boolean {
  return bcrypt.compareSync(password, hash);
}

export function generateToken(userId: number): string {
  return jwt.sign({ userId }, JWT_SECRET, { expiresIn: '24h' });
}

// Extend Express.Request interface to include 'user'
declare global {
  namespace Express {
    interface Request {
      user?: { userId: number };
    }
  }
}

export function authenticateToken(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Authentication required' });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as { userId: number };
    req.user = { userId: decoded.userId }; // Assign decoded data to req.user
    next();
  } catch (error) {
    return res.status(403).json({ error: 'Invalid token' });
  }
}
