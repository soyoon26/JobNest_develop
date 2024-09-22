import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { login, logout } from '../../redux/loginSlice';
import { useDispatch } from 'react-redux';
import { RootState } from '../../redux/store';
import ModalAlert from '../CalendarManagement/ModalAlert'; // Importing ModalAlert component
import ConfirmationModal from '../CalendarManagement/ConfirmationModal'; // Importing ConfirmationModal component
import GoogleCalendarButton from '../CalendarManagement/GoogleCalendarButton'; // Import the GoogleCalendarButton component
import FlashNotification from '../CalendarManagement/FlashNotification'; // Import FlashNotification component
import FullCalendarComponent from '../CalendarManagement/FullCalendarComponent'; // Import FullCalendarComponent

// 할 일 항목 타입 정의
type TodoItem = {
  id: number;
  text: string;
  isCompleted: boolean;
  date: string;
};

interface ToDoAppProps {
  onSave?: (todo: TodoItem) => void; // onSave prop 수정 (todo 아이템 전달)
}

// 오늘 날짜 가져오기 함수
const getTodayDate = () => {
  const today = new Date();
  return today.toISOString().split('T')[0];
};

const ToDoApp: React.FC<ToDoAppProps> = ({ onSave }) => {
  const [showToDoList, setShowToDoList] = useState(false); // 할 일 목록 보기 토글
  const [todos, setTodos] = useState<TodoItem[]>([]); // 할 일 목록 관리
  const [newTodo, setNewTodo] = useState(''); // 새로운 할 일 입력 상태
  const [nextId, setNextId] = useState(1); // 다음 할 일 ID
  const [editTodoId, setEditTodoId] = useState<number | null>(null); // 수정할 할 일 ID
  const [editText, setEditText] = useState(''); // 수정할 할 일 텍스트
  const [menuOpenId, setMenuOpenId] = useState<number | null>(null); // 열려 있는 메뉴 ID
  const [selectedCategory, setSelectedCategory] = useState<'today' | 'past'>(
    'today'
  ); // 선택한 카테고리 (오늘 or 지난 내역)
  const [token, setToken] = useState<string | null>(null); // 인증 토큰 관리
  const [currentDate, setCurrentDate] = useState<string>(getTodayDate()); // 현재 날짜

  const [isModalVisible, setModalVisible] = useState(false); // State for ModalAlert
  const [isConfirmationModalOpen, setConfirmationModalOpen] = useState(false); // State for ConfirmationModal
  const [todoToDelete, setTodoToDelete] = useState<number | null>(null); // Track which Todo to delete
  const [showNotification, setShowNotification] = useState(true); // State for showing FlashNotification

  const [isCalendarVisible, setIsCalendarVisible] = useState(false); // State for calendar visibility

  // Redux 상태에서 로그인 상태 가져오기
  const loginState = useSelector((state: RootState) => state.auth.login);
  const dispatch = useDispatch();

  // 로그인 상태를 토글하는 함수
  const handleLogin = (value: boolean) => {
    if (value) {
      dispatch(login());
      setShowNotification(true); // Show flash notification on login
    } else {
      dispatch(logout());
    }
  };

  // 토큰에 기반한 초기 할 일 목록 및 상태 복구
  useEffect(() => {
    const storedToken = localStorage.getItem('authToken');
    if (storedToken) {
      setToken(storedToken);
      handleLogin(true);

      const savedTodos = localStorage.getItem(`todos_${storedToken}`);
      const savedNextId = localStorage.getItem(`nextId_${storedToken}`);

      if (savedTodos) {
        setTodos(JSON.parse(savedTodos));
      }

      if (savedNextId) {
        setNextId(JSON.parse(savedNextId));
      }
    } else {
      handleLogin(false);
    }
  }, [token]);

  // 날짜 자동 업데이트
  useEffect(() => {
    const checkTime = () => {
      const todayDate = getTodayDate();
      if (todayDate !== currentDate) {
        setCurrentDate(todayDate);
        if (selectedCategory === 'today') {
          setSelectedCategory('past');
        }
      }
    };

    const intervalId = setInterval(checkTime, 60000); // 1분마다 체크
    return () => clearInterval(intervalId); // 클린업
  }, [currentDate, selectedCategory]);

  // 할 일 추가 함수
  const addTodo = () => {
    if (newTodo.trim()) {
      const newTodoItem: TodoItem = {
        id: nextId,
        text: newTodo,
        isCompleted: false,
        date: currentDate,
      };
      const updatedTodos = [...todos, newTodoItem];
      setTodos(updatedTodos);
      setNewTodo('');
      setNextId(nextId + 1);

      // onSave prop이 전달된 경우 호출, 구글 캘린더와 동기화
      if (onSave) {
        onSave(newTodoItem);
      }

      if (token) {
        localStorage.setItem(`todos_${token}`, JSON.stringify(updatedTodos));
        localStorage.setItem(`nextId_${token}`, JSON.stringify(nextId + 1));
      }

      setModalVisible(true); // Show success modal when a task is added
    }
  };

  // Enter 키를 통한 할 일 추가 처리
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };

  // 할 일 삭제 함수
  const removeTodo = (id: number) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);

    if (token) {
      localStorage.setItem(`todos_${token}`, JSON.stringify(updatedTodos));
    }
  };

  // 할 일 삭제 확인 모달 핸들러
  const handleDeleteTodo = (id: number) => {
    setTodoToDelete(id);
    setConfirmationModalOpen(true); // Show confirmation modal before deletion
  };

  // 할 일 완료/미완료 토글 함수
  const toggleTodo = (id: number) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    );
    setTodos(updatedTodos);

    if (token) {
      localStorage.setItem(`todos_${token}`, JSON.stringify(updatedTodos));
    }
  };

  // 할 일 수정 클릭 처리 함수
  const handleEditClick = (id: number, text: string) => {
    setEditTodoId(id);
    setEditText(text);
    setMenuOpenId(null);
  };

  // 할 일 수정 제출 함수
  const handleEditSubmit = (id: number) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, text: editText } : todo
    );
    setTodos(updatedTodos);

    if (token) {
      localStorage.setItem(`todos_${token}`, JSON.stringify(updatedTodos));
    }
    setEditTodoId(null);
    setEditText('');
  };

  // 오늘 할 일 필터링
  const todayTodos = todos.filter((todo) => todo.date === currentDate);
  // 지난 할 일 필터링
  const pastTodos = todos.filter((todo) => todo.date !== currentDate);
  const filteredTodos = selectedCategory === 'today' ? todayTodos : pastTodos;

  // 할 일 목록 렌더링 함수
  const renderTodoList = (todos: TodoItem[]) => (
    <ul className='mb-4'>
      {todos.map((todo) => (
        <li key={todo.id} className='mb-2'>
          <div className='flex justify-between items-center flex-wrap group relative'>
            <div className='flex items-center grow-0 shrink-0 basis-4/5'>
              <input
                type='checkbox'
                id={`todo-${todo.id}`}
                checked={todo.isCompleted}
                onChange={() => toggleTodo(todo.id)}
                className='mr-2 accent-[#636363] h-[20px] w-[20px]'
              />
              {editTodoId === todo.id ? (
                <input
                  type='text'
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  onKeyPress={(e) =>
                    e.key === 'Enter' && handleEditSubmit(todo.id)
                  }
                  className='border px-2 py-1 rounded w-40'
                />
              ) : (
                <span
                  className={`${
                    todo.isCompleted ? 'line-through text-gray-500' : ''
                  } cursor-pointer w-full py-[2px]`}
                  onClick={() => toggleTodo(todo.id)}
                >
                  {todo.text}
                </span>
              )}
            </div>
            <div className='flex justify-center items-center grow-0 shrink-0 basis-1/5'>
              <button
                onClick={() =>
                  setMenuOpenId(menuOpenId === todo.id ? null : todo.id)
                }
                className='text-gray-500 hover:text-gray-700 p-2'
              >
                <img
                  src='src\assets\images\menubar.png'
                  alt='메뉴바'
                  className='hidden group-hover:block'
                />
              </button>
              {menuOpenId === todo.id && (
                <div className='absolute top-[-1px] right-10 bg-white w-[58px] border rounded shadow-lg z-50'>
                  <button
                    onClick={() => handleEditClick(todo.id, todo.text)}
                    className='block text-left px-4 py-2 text-black hover:bg-gray-100 text-sm'
                  >
                    수정
                  </button>
                  <button
                    onClick={() => handleDeleteTodo(todo.id)}
                    className='block text-left px-4 py-2 text-black hover:bg-gray-100 text-sm'
                  >
                    삭제
                  </button>
                </div>
              )}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );

  return (
    <>
      {loginState && (
        <>
          <div className='flex justify-end'>
            {showToDoList && (
              <div className='bg-white rounded-lg shadow-lg w-72 p-4 border border-gray-300'>
                <div className='mb-4'>
                  <select
                    value={selectedCategory}
                    onChange={(e) =>
                      setSelectedCategory(e.target.value as 'today' | 'past')
                    }
                    className='border rounded-md w-[100px] px-2 py-1'
                  >
                    <option value='today'>오늘</option>
                    <option value='past'>지난 내역</option>
                  </select>
                </div>

                {selectedCategory === 'today' && (
                  <div>
                    {filteredTodos.length === 0 ? (
                      <p className='text-gray-500 mb-[13px] ml-[3px]'>
                        할 일이 없습니다. 추가해보세요!
                      </p>
                    ) : (
                      renderTodoList(filteredTodos)
                    )}
                    <input
                      type='text'
                      value={newTodo}
                      onChange={(e) => setNewTodo(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder='새로운 할 일 작성'
                      className='w-full border rounded-lg px-2 py-1 mb-4'
                    />
                    <button
                      onClick={addTodo}
                      className='w-full bg-[#347fff] text-white px-4 py-2 rounded-md hover:bg-[#347fff] text-[15px] font-extrabold'
                    >
                      추가
                    </button>
                  </div>
                )}

                {selectedCategory === 'past' && (
                  <>
                    {filteredTodos.length === 0 ? (
                      <p className='text-gray-500'>지난 내역이 없습니다.</p>
                    ) : (
                      renderTodoList(filteredTodos)
                    )}
                  </>
                )}
              </div>
            )}
          </div>

          {/* Google Calendar Button and '오늘 할 일 메모' Button moved 30px up */}
          <div className=''>
            {/* 로그인 알림 */}
            {showNotification && (
              <div>
                <FlashNotification
                  visible={showNotification}
                  onClose={() => setShowNotification(false)}
                />
              </div>
            )}

            {/* 버튼 2개 묶음 */}
            <div className='flex justify-end'>
              {/* 구글 달력 버튼 */}
              <GoogleCalendarButton
                isLoggedIn={loginState}
                toggleCalendar={() => setIsCalendarVisible(!isCalendarVisible)}
              />

              {/* '오늘 할 일 메모' Button */}
              <div className='ml-[20px] mt-[20px]'>
                <button
                  className='px-4 py-2 bg-[#347fff] text-white w-[136px] h-[42px] rounded-md shadow-md text-[15px] font-extrabold'
                  onClick={() => setShowToDoList(!showToDoList)}
                >
                  오늘 할 일 메모
                </button>
              </div>
            </div>
          </div>

          {/* {showNotification && (
            <div className='mt-[4px]'>
              <FlashNotification
                visible={showNotification}
                onClose={() => setShowNotification(false)}
              />
            </div>
          )} */}

          {/* FullCalendarComponent, conditionally rendered */}
          {isCalendarVisible && (
            <div>
              <FullCalendarComponent
                handleAlert={() => {}}
                handleEventNotification={() => {}}
                onEventSave={() => {}}
              />
            </div>
          )}

          {/* 일정 추가 확인 모달 */}
          {isModalVisible && (
            <ModalAlert
              message='일정이 추가되었습니다'
              type='success'
              onClose={() => setModalVisible(false)}
            />
          )}

          {/* 삭제 확인 모달 */}
          {isConfirmationModalOpen && todoToDelete !== null && (
            <ConfirmationModal
              isOpen={isConfirmationModalOpen}
              onClose={() => setConfirmationModalOpen(false)}
              onConfirm={() => {
                removeTodo(todoToDelete!);
                setConfirmationModalOpen(false);
              }}
              message='일정을 삭제하시겠습니까?'
              confirmText='삭제'
              cancelText='취소'
            />
          )}
        </>
      )}
    </>
  );
};

export default ToDoApp;
