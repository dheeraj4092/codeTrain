import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { courses } from '../data/courses';
import { Clock, Users, DollarSign, CheckCircle2 } from 'lucide-react';

export function CourseDetailPage() {
  const { courseId } = useParams<{ courseId: string }>();
  const navigate = useNavigate();
  const course = courses.find((c) => c.id === courseId);

  if (!course) {
    return (
      <div className="min-h-screen pt-24 px-4 text-center">
        <h2 className="text-2xl font-bold text-gray-900">Course not found</h2>
        <Link to="/courses" className="mt-4 text-blue-600 hover:text-blue-800">
          Back to courses
        </Link>
      </div>
    );
  }

  const handleEnrollClick = () => {
    navigate('/enroll');
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative h-96">
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="p-8">
            <div className="flex flex-wrap items-center justify-between">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {course.title}
              </h1>
              <div className="flex items-center">
                <DollarSign className="h-6 w-6 text-blue-600" />
                <span className="text-3xl font-bold text-blue-600">
                  ${course.price}
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-4">
              <div className="flex items-center text-gray-600">
                <Clock className="h-5 w-5 mr-2" />
                {course.duration}
              </div>
              <div className="flex items-center text-gray-600">
                <Users className="h-5 w-5 mr-2" />
                {course.level}
              </div>
            </div>

            <p className="mt-6 text-gray-600 text-lg leading-relaxed">
              {course.description}
            </p>

            <div className="mt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                What you'll learn
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {course.topics.map((topic, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-1" />
                    <span>{topic}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Your Instructor
              </h2>
              <div className="flex items-center">
                <img
                  src={course.instructor.image}
                  alt={course.instructor.name}
                  className="h-16 w-16 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {course.instructor.name}
                  </h3>
                  <p className="text-gray-600">{course.instructor.title}</p>
                </div>
              </div>
              <p className="mt-4 text-gray-600">{course.instructor.bio}</p>
            </div>

            <div className="mt-8 flex justify-center">
              <button 
                onClick={handleEnrollClick}
                className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors duration-300"
              >
                Enroll Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}