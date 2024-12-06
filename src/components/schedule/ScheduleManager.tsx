import React, { useState } from 'react';
import { Plus, Edit2, Trash2 } from 'lucide-react';
import { useScheduleStore } from '../../store/scheduleStore';
import { Schedule } from '../../types';

interface ScheduleManagerProps {
  courseId: string;
}

export function ScheduleManager({ courseId }: ScheduleManagerProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingSchedule, setEditingSchedule] = useState<Schedule | null>(null);
  const { addSchedule, updateSchedule, deleteSchedule } = useScheduleStore();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    
    const scheduleData = {
      courseId,
      title: formData.get('title') as string,
      startTime: new Date(formData.get('startTime') as string),
      endTime: new Date(formData.get('endTime') as string),
      meetingLink: formData.get('meetingLink') as string,
      description: formData.get('description') as string,
    };

    try {
      if (editingSchedule) {
        await updateSchedule(editingSchedule.id, scheduleData);
      } else {
        await addSchedule(scheduleData);
      }
      setIsModalOpen(false);
      setEditingSchedule(null);
    } catch (error) {
      console.error('Failed to save schedule:', error);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Class Schedule</h2>
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          <Plus className="h-5 w-5 mr-2" />
          Add Session
        </button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h3 className="text-xl font-semibold mb-4">
              {editingSchedule ? 'Edit Session' : 'Add New Session'}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Title</label>
                <input
                  type="text"
                  name="title"
                  defaultValue={editingSchedule?.title}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Start Time</label>
                <input
                  type="datetime-local"
                  name="startTime"
                  defaultValue={editingSchedule?.startTime.toISOString().slice(0, 16)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">End Time</label>
                <input
                  type="datetime-local"
                  name="endTime"
                  defaultValue={editingSchedule?.endTime.toISOString().slice(0, 16)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Meeting Link</label>
                <input
                  type="url"
                  name="meetingLink"
                  defaultValue={editingSchedule?.meetingLink}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Description</label>
                <textarea
                  name="description"
                  defaultValue={editingSchedule?.description}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                  rows={3}
                />
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => {
                    setIsModalOpen(false);
                    setEditingSchedule(null);
                  }}
                  className="px-4 py-2 text-gray-700 hover:text-gray-900"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  {editingSchedule ? 'Update' : 'Create'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}