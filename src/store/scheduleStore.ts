import { create } from 'zustand';
import { Schedule } from '../types';

interface ScheduleState {
  schedules: Schedule[];
  loading: boolean;
  error: string | null;
  fetchSchedules: (courseId: string) => Promise<void>;
  addSchedule: (schedule: Omit<Schedule, 'id'>) => Promise<void>;
  updateSchedule: (id: string, schedule: Partial<Schedule>) => Promise<void>;
  deleteSchedule: (id: string) => Promise<void>;
}

export const useScheduleStore = create<ScheduleState>((set, get) => ({
  schedules: [],
  loading: false,
  error: null,

  fetchSchedules: async (courseId: string) => {
    set({ loading: true, error: null });
    try {
      const response = await fetch(`/api/courses/${courseId}/schedules`);
      if (!response.ok) throw new Error('Failed to fetch schedules');
      const data = await response.json();
      set({ schedules: data });
    } catch (error) {
      set({ error: (error as Error).message });
    } finally {
      set({ loading: false });
    }
  },

  addSchedule: async (schedule) => {
    set({ loading: true, error: null });
    try {
      const response = await fetch('/api/schedules', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify(schedule),
      });
      if (!response.ok) throw new Error('Failed to add schedule');
      const newSchedule = await response.json();
      set(state => ({
        schedules: [...state.schedules, newSchedule],
      }));
    } catch (error) {
      set({ error: (error as Error).message });
    } finally {
      set({ loading: false });
    }
  },

  updateSchedule: async (id, schedule) => {
    set({ loading: true, error: null });
    try {
      const response = await fetch(`/api/schedules/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify(schedule),
      });
      if (!response.ok) throw new Error('Failed to update schedule');
      const updatedSchedule = await response.json();
      set(state => ({
        schedules: state.schedules.map(s => 
          s.id === id ? { ...s, ...updatedSchedule } : s
        ),
      }));
    } catch (error) {
      set({ error: (error as Error).message });
    } finally {
      set({ loading: false });
    }
  },

  deleteSchedule: async (id) => {
    set({ loading: true, error: null });
    try {
      const response = await fetch(`/api/schedules/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });
      if (!response.ok) throw new Error('Failed to delete schedule');
      set(state => ({
        schedules: state.schedules.filter(s => s.id !== id),
      }));
    } catch (error) {
      set({ error: (error as Error).message });
    } finally {
      set({ loading: false });
    }
  },
}));