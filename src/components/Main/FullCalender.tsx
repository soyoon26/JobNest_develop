import googleCalendarPlugin from '@fullcalendar/google-calendar';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { useState } from 'react';

const FullCalender = () => {
  const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;
  const [load, setLoad] = useState(false);
  const handleLoad = () => {
    setLoad(!load);
  };
  return (
    <>
      {load ? (
        <div className='bg-white w-[1000px]'>
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
              eventColor={'#347fff'}
              height={'660px'}
            />
          </div>
        </div>
      ) : (
        ''
      )}

      <div className='flex justify-end mt-[20px]'>
        <button
          className='px-4 py-2 bg-[#347fff] text-white w-[136px] h-[42px] rounded-md shadow-md text-[15px] font-extrabold'
          onClick={() => {
            handleLoad();
          }}
        >
          구글 캘린더
        </button>
      </div>
    </>
  );
};
export default FullCalender;
