import React, { useEffect, useState } from 'react';
import { gapi } from 'gapi-script';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import ModalAlert from './ModalAlert';  // 모달 알림
import Notification from '../Notification/Notification';  // 알림 컴포넌트

// Define the types for events and notifications
interface CalendarEvent {
  summary: string;
  start: { dateTime?: string; date?: string };
  end: { dateTime?: string; date?: string };
}

interface NotificationState {
  message: string;
  type: 'success' | 'error';
}

// FullCalendarComponent Props 타입 정의
interface FullCalendarComponentProps {
  isVisible: boolean;  // 달력 가시성 prop
  handleAlert: (message: string) => void;  // 알림 핸들러
  handleEventNotification: (message: string, type: 'success' | 'error') => void;  // 이벤트 성공/실패 알림 핸들러
}

const CLIENT_ID = 'YOUR_GOOGLE_CLIENT_ID';
const API_KEY = 'YOUR_GOOGLE_API_KEY';
const CALENDAR_ID = 'primary'; 
const SCOPES = 'https://www.googleapis.com/auth/calendar';

const FullCalendarComponent: React.FC<FullCalendarComponentProps> = ({ isVisible, handleAlert, handleEventNotification }) => {
  const [events, setEvents] = useState<{ title: string; start: string; end: string }[]>([]);
  const [alertMessage, setAlertMessage] = useState<string | null>(null);
  const [notification, setNotification] = useState<NotificationState | null>(null);
  const [isCalendarVisible, setIsCalendarVisible] = useState(true);  // 캘린더 보임 여부 상태 추가

  // Google API 초기화 및 이벤트 불러오기
  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        scope: SCOPES,
        discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'],
      }).then(() => {
        loadEvents();
      });
    };
    gapi.load('client:auth2', initClient);
  }, []);

  // Google Calendar에서 이벤트를 불러오는 함수
  const loadEvents = () => {
    gapi.client.calendar.events.list({
      calendarId: CALENDAR_ID,
      timeMin: new Date().toISOString(),
      showDeleted: false,
      singleEvents: true,
      maxResults: 10,
      orderBy: 'startTime',
    }).then((response: any) => {
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
    setAlertMessage(`New event on ${arg.dateStr}`);
    handleAlert(`New event on ${arg.dateStr}`);  // 부모 컴포넌트로 알림 전달
  };

  // Google Calendar에 새 이벤트 저장
  const handleEventSave = (eventData: { title: string; start: string; end: string }) => {
    gapi.client.calendar.events.insert({
      calendarId: CALENDAR_ID,
      resource: {
        summary: eventData.title,
        start: { dateTime: eventData.start },
        end: { dateTime: eventData.end },
      },
    }).then(() => {
      setNotification({ message: 'Event successfully saved!', type: 'success' });
      handleEventNotification('Event successfully saved!', 'success');  // 성공 알림 부모 컴포넌트로 전달
      loadEvents();  // 새로 생성된 이벤트를 불러오기
    }).catch(() => {
      setNotification({ message: 'Failed to save event!', type: 'error' });
      handleEventNotification('Failed to save event!', 'error');  // 실패 알림 부모 컴포넌트로 전달
    });
  };

  // 이벤트 클릭 시 처리
  const handleEventClick = (eventClickInfo: any) => {
    setAlertMessage(`Event: ${eventClickInfo.event.title}`);
    handleAlert(`Event: ${eventClickInfo.event.title}`);  // 부모 컴포넌트로 알림 전달
  };

  // 캘린더 보이기/숨기기 상태 토글
  const toggleCalendarVisibility = () => {
    setIsCalendarVisible(!isCalendarVisible);
  };

  // 캘린더가 숨겨졌을 때는 렌더링하지 않음
  if (!isVisible) {
    return null;
  }

  return (
    <div className="calendar-container">
      <h2>Google Calendar Events</h2>

      {/* 구글 달력 보이기/숨기기 버튼 */}
      <button
        className="border-2 bg-white w-[140px] font-semibold h-[36px] border-[#335995] text-[#335995] rounded-md"
        onClick={toggleCalendarVisibility}
      >
        {isCalendarVisible ? '구글 달력 숨기기' : '구글 달력 보기'}
      </button>

      {/* 캘린더 보이기/숨기기 상태에 따른 캘린더 렌더링 */}
      {isCalendarVisible && (
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          events={events}
          dateClick={handleDateClick}
          eventClick={handleEventClick}
          eventDrop={(eventInfo) => handleEventSave({ title: eventInfo.event.title, start: eventInfo.event.startStr, end: eventInfo.event.endStr })}
        />
      )}  

      {/* 알림 모달 */}
      {alertMessage && <ModalAlert message={alertMessage} onClose={() => setAlertMessage(null)} />}

      {/* 성공 또는 실패 알림 */}
      {notification && <Notification message={notification.message} type={notification.type} />}
    </div>
  );
};
 
export default FullCalendarComponent;
