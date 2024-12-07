import React from 'react';
import { useParams } from 'react-router-dom';

export function ForumPage() {
  const { courseId } = useParams<{ courseId: string }>();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Course Forum</h1>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <p className="text-gray-600 dark:text-gray-300">
            Discussion forum for course {courseId}
          </p>
        </div>
      </div>
    </div>
  );
}