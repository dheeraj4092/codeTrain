import React, { useEffect } from 'react';
import { Calendar as BigCalendar, dateFnsLocalizer } from 'react-big-calendar';
import { format } from 'date-fns';
import { parse } from 'date-fns';
import { startOfWeek } from 'date-fns';
import { getDay } from 'date-fns';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useScheduleStore } from '../../store/scheduleStore';
import { Schedule } from '../../types';

const locales = {
  'en-US': require('date-fns/locale/en-US'),
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

interface CalendarProps {
  courseId: string;
}

export function Calendar({ courseId }: CalendarProps) {
  const { schedules, fetchSchedules, loading, error } = useScheduleStore();

  useEffect(() => {
    fetchSchedules(courseId);
  }, [courseId, fetchSchedules]);

  if (loading) return <div>Loading calendar...</div>;
  if (error) return <div>Error loading calendar: {error}</div>;

  const events = schedules.map((schedule: Schedule) => ({
    title: schedule.title,
    start: new Date(schedule.startTime),
    end: new Date(schedule.endTime),
    resource: schedule,
  }));

  return (
    <div className="h-[600px] bg-white p-4 rounded-lg shadow-lg">
      <BigCalendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: '100%' }}
        views={['month', 'week', 'day']}
        onSelectEvent={(event) => {
          if (event.resource.meetingLink) {
            window.open(event.resource.meetingLink, '_blank');
          }
        }}
      />
    </div>
  );
}