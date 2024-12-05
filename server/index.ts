import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { authRouter } from './routes/auth';
import { coursesRouter } from './routes/courses';
import { portalRouter } from './routes/portal';
import { adminRouter } from './routes/admin';
import { initializeDatabase } from './database/init';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Initialize database
initializeDatabase();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRouter);
app.use('/api/courses', coursesRouter);
app.use('/api/portal', portalRouter);
app.use('/api/admin', adminRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});