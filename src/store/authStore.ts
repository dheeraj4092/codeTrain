import { create } from 'zustand';

interface User {
  id: string;
  name: string;
  email: string;
  enrolledCourses: string[];
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

// Mock user data - In a real app, this would come from an API
const mockUser: User = {
  id: '1',
  name: 'John Doe',
  email: 'john@example.com',
  enrolledCourses: ['java-programming', 'automation-testing'],
};

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  login: async (email: string, password: string) => {
    // Mock authentication - In a real app, this would be an API call
    if (email === 'john@example.com' && password === 'password') {
      set({ user: mockUser, isAuthenticated: true });
    } else {
      throw new Error('Invalid credentials');
    }
  },
  logout: () => {
    set({ user: null, isAuthenticated: false });
  },
}));