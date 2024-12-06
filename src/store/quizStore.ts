import { create } from 'zustand';
import { Quiz, Question } from '../types';

interface QuizState {
  quizzes: Quiz[];
  currentQuiz: Quiz | null;
  loading: boolean;
  error: string | null;
  fetchQuizzes: (courseId: string) => Promise<void>;
  startQuiz: (quizId: string) => Promise<void>;
  submitAnswer: (questionId: string, answer: string | string[]) => Promise<void>;
}

export const useQuizStore = create<QuizState>((set, get) => ({
  quizzes: [],
  currentQuiz: null,
  loading: false,
  error: null,

  fetchQuizzes: async (courseId: string) => {
    set({ loading: true, error: null });
    try {
      const response = await fetch(`/api/courses/${courseId}/quizzes`);
      if (!response.ok) throw new Error('Failed to fetch quizzes');
      const data = await response.json();
      set({ quizzes: data });
    } catch (error) {
      set({ error: (error as Error).message });
    } finally {
      set({ loading: false });
    }
  },

  startQuiz: async (quizId: string) => {
    set({ loading: true, error: null });
    try {
      const response = await fetch(`/api/quizzes/${quizId}/start`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });
      if (!response.ok) throw new Error('Failed to start quiz');
      const quiz = await response.json();
      set({ currentQuiz: quiz });
    } catch (error) {
      set({ error: (error as Error).message });
    } finally {
      set({ loading: false });
    }
  },

  submitAnswer: async (questionId: string, answer: string | string[]) => {
    set({ loading: true, error: null });
    try {
      const response = await fetch(`/api/questions/${questionId}/answer`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({ answer }),
      });
      if (!response.ok) throw new Error('Failed to submit answer');
      const result = await response.json();
      // Update current quiz with the result
      set(state => ({
        currentQuiz: state.currentQuiz ? {
          ...state.currentQuiz,
          questions: state.currentQuiz.questions.map(q =>
            q.id === questionId ? { ...q, userAnswer: answer } : q
          ),
        } : null,
      }));
    } catch (error) {
      set({ error: (error as Error).message });
    } finally {
      set({ loading: false });
    }
  },
}));