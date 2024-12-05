import { create } from 'zustand';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'student' | 'admin';
  enrolledCourses: string[];
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

// Mock user data - In a real app, this would come from an API
const mockUsers: Record<string, User> = {
  'john@example.com': {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    role: 'student',
    enrolledCourses: ['java-programming', 'automation-testing'],
  },
  'admin@example.com': {
    id: '2',
    name: 'Admin User',
    email: 'admin@example.com',
    role: 'admin',
    enrolledCourses: [],
  },
};

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  login: async (email: string, password: string) => {
    // Mock authentication - In a real app, this would be an API call
    const user = mockUsers[email];

    if (user && password === 'password') { // Assuming any valid email matches a user
      set({ user, isAuthenticated: true });
    } else {
      throw new Error('Invalid credentials');
    }
  },
  logout: () => {
    set({ user: null, isAuthenticated: false });
  },
}));
