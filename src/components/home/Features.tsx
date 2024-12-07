import React from 'react';
import { Code, Database, TestTube2, Users } from 'lucide-react';
import { useThemeStore } from '../../store/themeStore';

const features = [
  {
    name: 'Programming Languages',
    description: 'Master core programming languages and advanced programming techniques with hands-on projects.',
    icon: Code,
  },
  {
    name: 'Automation Testing',
    description: 'Learn industry-standard testing frameworks and best practices for quality assurance.',
    icon: TestTube2,
  },
  {
    name: 'SQL Mastery',
    description: 'Develop expertise in database design, optimization, and complex queries.',
    icon: Database,
  },
  {
    name: 'Live Sessions',
    description: 'Interactive live classes with real-time doubt clearing and practical exercises.',
    icon: Users,
  },
];

export function Features() {
  const { isDarkMode } = useThemeStore();
  return (
    <div className={`py-12 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className={`text-base font-semibold tracking-wide uppercase ${isDarkMode ? 'text-blue-300' : 'text-blue-600'}`}>
            Our Courses
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl">
            Comprehensive Technical Training
          </p>
          <p className="mt-4 max-w-2xl text-xl lg:mx-auto">
            Choose from our range of specialized courses designed to help you excel in your technical career.
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <div
                  className={`absolute flex items-center justify-center h-12 w-12 rounded-md ${
                    isDarkMode ? 'bg-blue-500' : 'bg-blue-600'
                  } text-white`}
                >
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium">{feature.name}</p>
                <p className="mt-2 ml-16 text-base">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}