import googleCalendarPlugin from '@fullcalendar/google-calendar';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

const FullCalender = () => {
  const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;
  return (
    <div className='cal-container'>
      <FullCalendar
        plugins={[dayGridPlugin, googleCalendarPlugin]}
        initialView='dayGridMonth'
        googleCalendarApiKey={API_KEY}
        events={{
          googleCalendarId: 'jiwoopark727@gmail.com',
        }}
        eventDisplay={'block'}
        eventTextColor={'#FFF'}
        eventColor={'#F2921D'}
        height={'660px'}
      />
    </div>
  );
};
export default FullCalender;
