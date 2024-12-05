import React, { useState, useEffect } from 'react';
import { User, Mail, Calendar } from 'lucide-react';

interface Student {
  id: number;
  name: string;
  email: string;
  enrolledCourses: string[];
  enrollmentDate: string;
}

export function StudentList() {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real app, fetch students from API
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await fetch('/api/admin/students', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      const data = await response.json();
      setStudents(data);
    } catch (error) {
      console.error('Error fetching students:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Enrolled Students</h1>
        
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="divide-y divide-gray-200">
            {students.map((student) => (
              <div key={student.id} className="p-6 hover:bg-gray-50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <User className="h-10 w-10 text-gray-400" />
                    <div className="ml-4">
                      <h2 className="text-lg font-medium text-gray-900">{student.name}</h2>
                      <div className="flex items-center text-gray-500">
                        <Mail className="h-4 w-4 mr-1" />
                        <span>{student.email}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>Enrolled: {new Date(student.enrollmentDate).toLocaleDateString()}</span>
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-sm font-medium text-gray-500">Enrolled Courses:</h3>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {student.enrolledCourses.map((course, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}