import React from 'react';
import { Moon, Sun, ZoomIn, Eye } from 'lucide-react';
import { useThemeStore } from '../../store/themeStore';
import * as Switch from '@radix-ui/react-switch';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

export function ThemeToggle() {
  const { isDarkMode, highContrast, fontSize, toggleDarkMode, toggleHighContrast, setFontSize } = useThemeStore();

  return (
    <div className="flex items-center space-x-4">
      {/* Dark Mode Toggle */}
      <div className="flex items-center space-x-2">
        <Switch.Root
          checked={isDarkMode}
          onCheckedChange={toggleDarkMode}
          className="w-11 h-6 bg-gray-200 rounded-full relative data-[state=checked]:bg-blue-600"
        >
          <Switch.Thumb className="block w-5 h-5 bg-white rounded-full transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[22px]">
            {isDarkMode ? <Moon className="h-3 w-3" /> : <Sun className="h-3 w-3" />}
          </Switch.Thumb>
        </Switch.Root>
        <span className="text-sm">Dark Mode</span>
      </div>

      {/* High Contrast Toggle */}
      <div className="flex items-center space-x-2">
        <Switch.Root
          checked={highContrast}
          onCheckedChange={toggleHighContrast}
          className="w-11 h-6 bg-gray-200 rounded-full relative data-[state=checked]:bg-blue-600"
        >
          <Switch.Thumb className="block w-5 h-5 bg-white rounded-full transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[22px]">
            <Eye className="h-3 w-3" />
          </Switch.Thumb>
        </Switch.Root>
        <span className="text-sm">High Contrast</span>
      </div>

      {/* Font Size Dropdown */}
      <DropdownMenu.Root>
        <DropdownMenu.Trigger className="flex items-center space-x-1 px-3 py-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">
          <ZoomIn className="h-4 w-4" />
          <span className="text-sm">Font Size</span>
        </DropdownMenu.Trigger>

        <DropdownMenu.Content className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-2 min-w-[150px]">
          {['normal', 'large', 'x-large'].map((size) => (
            <DropdownMenu.Item
              key={size}
              className="px-3 py-2 text-sm cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
              onClick={() => setFontSize(size as 'normal' | 'large' | 'x-large')}
            >
              {size.charAt(0).toUpperCase() + size.slice(1)}
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </div>
  );
}
