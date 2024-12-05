import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Code, Gamepad, Users, Award, Clock } from 'lucide-react';

interface Program {
  title: string;
  description: string;
  icon: React.ElementType;
  courses: string[];
}

const programs: Program[] = [
  {
    title: "Kids Coding Program",
    description: "Interactive coding lessons designed specifically for children aged 8-14, teaching fundamental programming concepts through fun projects.",
    icon: Code,
    courses: ["Scratch Programming", "Python for Kids", "Game Development Basics"]
  },
  {
    title: "Game Development",
    description: "Learn to create exciting games while developing problem-solving skills and creativity. Perfect for young aspiring game developers.",
    icon: Gamepad,
    courses: ["Unity Game Design", "2D Game Creation", "3D Game Basics"]
  }
];

export function AboutPage() {
  const navigate = useNavigate();

  const handleEnrollClick = () => {
    navigate('/enroll');
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Company Overview */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About TechEdu</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are dedicated to providing high-quality technical education through innovative teaching methods and industry-relevant curriculum.
          </p>
        </div>

        {/* Key Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            { icon: Users, title: "Expert Instructors", description: "Learn from industry professionals with years of experience" },
            { icon: Award, title: "Industry Recognition", description: "Courses designed to meet current industry standards" },
            { icon: Clock, title: "Flexible Learning", description: "Study at your own pace with both online and offline options" }
          ].map((feature, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <feature.icon className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
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

        {/* Mission Statement */}
        <div className="bg-blue-600 text-white rounded-lg shadow-lg p-8 text-center">
          <BookOpen className="h-16 w-16 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-xl max-w-3xl mx-auto">
            To empower the next generation of technology leaders through comprehensive education, practical training, and continuous support in their learning journey.
          </p>
        </div>
      </div>
    </div>
  );
}