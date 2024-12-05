import React from 'react';
import { ArrowRight } from 'lucide-react';

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
  // Handle Enroll Button Click
  const handleEnrollClick = () => {
    alert('Enrollment successful!');
  };

  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Master Technical Skills</span>
                <span className="block text-blue-600">With Industry Experts</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Learn Java, Automation Testing, and SQL from experienced professionals. 
                Join our comprehensive courses designed for both beginners and advanced learners.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a href="/courses" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10">
                    View Courses
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a href="/contact" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-blue-100 hover:bg-blue-200 md:py-4 md:text-lg md:px-10">
                    Schedule Demo
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-half lg:h-half"
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
          alt="Students learning"
        />
      </div>

      {/* Kids Programs */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Kids Programs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <div key={index} className="border rounded-lg p-6">
              <div className="flex items-center mb-4">
                <program.icon className="h-8 w-8 text-blue-600" />
                <h3 className="text-xl font-semibold text-gray-900 ml-3">{program.title}</h3>
              </div>
              <p className="text-gray-600 mb-4">{program.description}</p>
              <div className="space-y-2">
                <h4 className="font-medium text-gray-900">Available Courses:</h4>
                <ul className="list-disc list-inside text-gray-600">
                  {program.courses.map((course, idx) => (
                    <li key={idx}>{course}</li>
                  ))}
                </ul>
              </div>
              <button
                onClick={handleEnrollClick}
                className="mt-4 w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
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
