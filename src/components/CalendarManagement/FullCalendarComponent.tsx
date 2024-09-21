import React, { useEffect, useState } from 'react';
import { gapi } from 'gapi-script';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import ModalAlert from './ModalAlert';
import Notification from '../Notification/Notification'


interface CalendarEvent {
  summary: string;
  start: { dateTime?: string; date?: string };
  end: { dateTime?: string; date?: string };
}

interface NotificationState {
  message: string;
  type: 'success' | 'error';
}

interface FullCalendarComponentProps {
  isVisible: boolean;
  handleAlert: (message: string) => void;
  handleEventNotification: (message: string, type: 'success' | 'error') => void;
  onEventSave: (eventData: { title: string; start: string; end: string }) => void;  // Required prop for saving events
}

const CLIENT_ID = '843336558883-t6882gjo6vco7pf0ikbr3tlrku7f9kgu.apps.googleusercontent.com';
const API_KEY = 'AIzaSyDlbRl04r8yOjxcmDRZqD9IS6Jo6qgjkn8';
const CALENDAR_ID = 'primary';
const SCOPES = 'https://www.googleapis.com/auth/calendar';

const FullCalendarComponent: React.FC<FullCalendarComponentProps> = ({
  isVisible,
  handleAlert,
  handleEventNotification,
  onEventSave, // Add onEventSave to the destructured props
}) => {
  const [events, setEvents] = useState<{ title: string; start: string; end: string }[]>([]);
  const [alertMessage, setAlertMessage] = useState<string | null>(null);
  const [notification, setNotification] = useState<NotificationState | null>(null);

  useEffect(() => {
    const initClient = () => {
      gapi.client
        .init({
          apiKey: API_KEY,
          clientId: CLIENT_ID,
          scope: SCOPES,
          discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'],
        })
        .then(() => {
          loadEvents();
        });
    };
    gapi.load('client:auth2', initClient);
  }, []);

  const loadEvents = () => {
    gapi.client.calendar.events
      .list({
        calendarId: CALENDAR_ID,
        timeMin: new Date().toISOString(),
        showDeleted: false,
        singleEvents: true,
        maxResults: 10,
        orderBy: 'startTime',
      })
      .then((response: any) => {
        const events = response.result.items.map((event: CalendarEvent) => ({
          title: event.summary,
          start: event.start.dateTime || event.start.date,
          end: event.end.dateTime || event.end.date,
        }));
        setEvents(events);
      });
  };

  // 날짜 클릭 시 새로운 이벤트 생성
  const handleDateClick = (arg: { dateStr: string }) => {
    const title = prompt('Enter event title');
    if (title) {
      const start = arg.dateStr;
      const end = arg.dateStr;
      
      // Save event using the external handler
      onEventSave({ title, start, end });

      // Optionally, save directly to Google Calendar here
      gapi.client.calendar.events.insert({
        calendarId: CALENDAR_ID,
        resource: {
          summary: title,
          start: { dateTime: start },
          end: { dateTime: end },
        },
      }).then(() => {
        setNotification({ message: 'Event successfully saved!', type: 'success' });
        handleEventNotification('Event successfully saved!', 'success');
        loadEvents();
      }).catch(() => {
        setNotification({ message: 'Failed to save event!', type: 'error' });
        handleEventNotification('Failed to save event!', 'error');
      });
    }
  };

  const handleEventClick = (eventClickInfo: any) => {
    setAlertMessage(`Event: ${eventClickInfo.event.title}`);
    handleAlert(`Event: ${eventClickInfo.event.title}`);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="calendar-container p-6 rounded-lg shadow-lg bg-white">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
        }}
        buttonText={{
          today: 'Today',
          month: 'Month',
          week: 'Week',
          day: 'Day',
          list: 'List',
        }}
        events={events}
        dateClick={handleDateClick}
        eventClick={handleEventClick}
        height="auto"
        dayMaxEventRows={true}
        navLinks={true}
        editable={true}
        selectable={true}
        themeSystem="bootstrap"
        eventColor="#347fff"
      />
      {/* Modal for alerts */}
      {alertMessage && <ModalAlert message={alertMessage} onClose={() => setAlertMessage(null)} />}
      {/* Notifications */}
      {notification && <Notification message={notification.message} type={notification.type} />}
    </div>
  );
};

export default FullCalendarComponent;
