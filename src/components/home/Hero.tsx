import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useThemeStore } from '../../store/themeStore';
// Mock data for Kids Programs
interface Program {
  title: string;
  description: string;
  icon: React.ElementType;
  courses: string[];
}
const programs: Program[] = [
  {
    title: 'Coding for Kids',
    description: 'Introduce your child to the world of coding with fun and interactive lessons.',
    icon: () => <div className="h-8 w-8 text-blue-600">👾</div>, // Use any icon component you prefer
    courses: ['Scratch Programming', 'Python for Kids', 'Web Development Basics'],
  },
  {
    title: 'Math and Science Fun',
    description: 'Engage your child in exciting math and science projects that make learning fun.',
    icon: () => <div className="h-8 w-8 text-blue-600">🧪</div>, // Use any icon component you prefer
    courses: ['Introduction to Chemistry', 'Math Puzzles', 'Physics for Kids'],
  },
];

export function Hero() {
  const { isDarkMode } = useThemeStore();
  // Handle Enroll Button Click
  const handleEnrollClick = () => {
    alert('Enrollment successful!');
  };

  return (
    <div className={`relative overflow-hidden ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">
                <span className="block">Master Technical Skills</span>
                <span className={`block ${isDarkMode ? 'text-blue-300' : 'text-blue-600'}`}>
                  With Industry Experts
                </span>
              </h1>
              <p className="mt-3 text-base sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Learn Java, Automation Testing, and SQL from experienced professionals.
                Join our comprehensive courses designed for both beginners and advanced learners.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="/courses"
                    className={`w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md ${
                      isDarkMode ? 'bg-blue-500 hover:bg-blue-600' : 'bg-blue-600 hover:bg-blue-700'
                    } text-white`}
                  >
                    View Courses
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="/contact"
                    className={`w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md ${
                      isDarkMode ? 'bg-gray-700 hover:bg-gray-600 text-white' : 'bg-blue-100 hover:bg-blue-200 text-blue-600'
                    }`}
                  >
                    Schedule Demo
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      {/* Kids Programs */}
      <div className={`rounded-lg shadow-lg p-8 mb-16 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}>
        <h2 className="text-3xl font-bold mb-8 text-center">Our Kids Programs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <div key={index} className={`border rounded-lg p-6 ${isDarkMode ? 'border-gray-700' : 'border-gray-300'}`}>
              <div className="flex items-center mb-4">
                <program.icon />
                <h3 className="text-xl font-semibold ml-3">{program.title}</h3>
              </div>
              <p className="mb-4">{program.description}</p>
              <ul className="list-disc list-inside">
                {program.courses.map((course, idx) => (
                  <li key={idx}>{course}</li>
                ))}
              </ul>
              <button
                className={`mt-4 w-full px-4 py-2 rounded-md transition-colors ${
                  isDarkMode ? 'bg-blue-500 hover:bg-blue-600' : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                Enroll Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
