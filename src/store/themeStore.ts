import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ThemeState {
  isDarkMode: boolean;
  highContrast: boolean;
  fontSize: 'normal' | 'large' | 'x-large';
  toggleDarkMode: () => void;
  toggleHighContrast: () => void;
  setFontSize: (size: 'normal' | 'large' | 'x-large') => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      isDarkMode: false, // Default to light mode
      highContrast: false,
      fontSize: 'normal', // Default font size
      toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
      toggleHighContrast: () => set((state) => ({ highContrast: !state.highContrast })),
      setFontSize: (fontSize) => set({ fontSize }),
    }),
    {
      name: 'theme-storage', // Persist theme settings in local storage
    }
  )
);
