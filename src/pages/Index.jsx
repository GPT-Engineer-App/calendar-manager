import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import { Button } from '@/components/ui/button';

const Index = () => {
  const [currentView, setCurrentView] = useState('dayGridMonth');

  const handleViewChange = (view) => {
    setCurrentView(view);
  };

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center">
      <div className="mb-4 space-x-2">
        <Button variant="outline" onClick={() => handleViewChange('dayGridYear')}>Year View</Button>
        <Button variant="outline" onClick={() => handleViewChange('dayGridMonth')}>Month View</Button>
        <Button variant="outline" onClick={() => handleViewChange('timeGridWeek')}>Week View</Button>
        <Button variant="outline" onClick={() => handleViewChange('timeGridDay')}>Day View</Button>
        <Button variant="outline" onClick={() => handleViewChange('listWeek')}>Agenda View</Button>
      </div>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
        initialView={currentView}
        headerToolbar={false}
        events={[
          { title: 'Event 1', date: '2023-10-01' },
          { title: 'Event 2', date: '2023-10-02' },
          { title: 'Event 3', date: '2023-10-03' },
        ]}
      />
    </div>
  );
};

export default Index;