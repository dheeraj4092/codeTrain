import React from 'react';
import { Users, BookOpen, Video, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

export function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Admin Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link to="/admin/students" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center">
              <Users className="h-8 w-8 text-blue-600" />
              <h2 className="ml-3 text-xl font-semibold text-gray-900">Manage Students</h2>
            </div>
            <p className="mt-2 text-gray-600">View and manage enrolled students</p>
          </Link>
          
          <Link to="/admin/courses" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center">
              <BookOpen className="h-8 w-8 text-blue-600" />
              <h2 className="ml-3 text-xl font-semibold text-gray-900">Manage Courses</h2>
            </div>
            <p className="mt-2 text-gray-600">Update course content and materials</p>
          </Link>
          
          <Link to="/admin/materials" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center">
              <FileText className="h-8 w-8 text-blue-600" />
              <h2 className="ml-3 text-xl font-semibold text-gray-900">Upload Materials</h2>
            </div>
            <p className="mt-2 text-gray-600">Add new lectures and course materials</p>
          </Link>
        </div>
      </div>
    </div>
  );
}