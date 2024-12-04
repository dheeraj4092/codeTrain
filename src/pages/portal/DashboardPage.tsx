import React from 'react';
import { useAuthStore } from '../../store/authStore';
import { Video, FileText, Link as LinkIcon, Calendar } from 'lucide-react';

// Mock data - In a real app, this would come from an API
const mockData = {
  nextClass: {
    title: 'Advanced Java Concepts',
    date: '2024-03-20T10:00:00',
    meetingLink: 'https://zoom.us/j/123456789',
  },
  lectures: [
    { id: 1, title: 'Introduction to Java', duration: '1:30:00', date: '2024-03-15' },
    { id: 2, title: 'Object-Oriented Programming', duration: '1:45:00', date: '2024-03-17' },
  ],
  notes: [
    { id: 1, title: 'Java Basics', type: 'PDF', size: '2.5 MB' },
    { id: 2, title: 'OOP Concepts', type: 'PDF', size: '1.8 MB' },
  ],
};

export function DashboardPage() {
  const user = useAuthStore((state) => state.user);

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Welcome back, {user?.name}!</h1>
        </div>

        {/* Next Class Card */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Next Class</h2>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-lg font-medium">{mockData.nextClass.title}</p>
              <p className="text-gray-500">
                {new Date(mockData.nextClass.date).toLocaleString()}
              </p>
            </div>
            <a
              href={mockData.nextClass.meetingLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
            >
              <LinkIcon className="h-4 w-4 mr-2" />
              Join Meeting
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Recorded Lectures */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <Video className="h-5 w-5 mr-2 text-blue-600" />
              Recorded Lectures
            </h2>
            <div className="space-y-4">
              {mockData.lectures.map((lecture) => (
                <div key={lecture.id} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{lecture.title}</p>
                    <p className="text-sm text-gray-500">
                      Duration: {lecture.duration} | {lecture.date}
                    </p>
                  </div>
                  <button className="text-blue-600 hover:text-blue-800">
                    <Video className="h-5 w-5" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Course Notes */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <FileText className="h-5 w-5 mr-2 text-blue-600" />
              Course Notes
            </h2>
            <div className="space-y-4">
              {mockData.notes.map((note) => (
                <div key={note.id} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{note.title}</p>
                    <p className="text-sm text-gray-500">
                      {note.type} • {note.size}
                    </p>
                  </div>
                  <button className="text-blue-600 hover:text-blue-800">
                    <FileText className="h-5 w-5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}