import React from 'react';
import { Code, Database, TestTube2, Users } from 'lucide-react';

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
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Our Courses</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Comprehensive Technical Training
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Choose from our range of specialized courses designed to help you excel in your technical career.
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                <p className="mt-2 ml-16 text-base text-gray-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}