import React from 'react';
import { Link } from 'react-router-dom';
import { courses } from '../data/courses';
import { Clock, Users, BookOpen } from 'lucide-react';

export function CoursesPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100 sm:text-5xl">
            Our Courses
          </h1>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">
            Choose from our selection of professional technical courses
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <Link
              key={course.id}
              to={`/courses/${course.id}`}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                  {course.title}
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400 line-clamp-2">
                  {course.description}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <Clock className="h-4 w-4 mr-1" />
                    {course.duration}
                  </div>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <Users className="h-4 w-4 mr-1" />
                    {course.level}
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    ${course.price}
                  </span>
                  <span className="inline-flex items-center text-blue-600 dark:text-blue-400">
                    Learn more
                    <BookOpen className="ml-2 h-4 w-4" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
