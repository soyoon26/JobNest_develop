import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { gapi } from 'gapi-script'; // Import gapi for Google Calendar
import { login, logout } from '../../redux/loginSlice';
import { useDispatch } from 'react-redux';
import { RootState } from '../../redux/store';
import ModalAlert from '../CalendarManagement/ModalAlert'; // Import ModalAlert

// 할 일 항목 타입
type TodoItem = {
  id: number;
  text: string;
  isCompleted: boolean;
  date: string;
};

interface ToDoAppProps {
  onSave?: (todo: TodoItem) => void; // Optional onSave prop
}

const getTodayDate = () => {
  const today = new Date();
  return today.toISOString().split('T')[0];
};

const ToDoApp: React.FC<ToDoAppProps> = ({ onSave }) => {
  const [showToDoList, setShowToDoList] = useState(false);
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [newTodo, setNewTodo] = useState('');
  const [nextId, setNextId] = useState(1);
  const [editTodoId, setEditTodoId] = useState<number | null>(null);
  const [editText, setEditText] = useState('');
  const [menuOpenId, setMenuOpenId] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<'today' | 'past'>('today');
  const [token, setToken] = useState<string | null>(null);
  const [currentDate, setCurrentDate] = useState<string>(getTodayDate());
  const [alertMessage, setAlertMessage] = useState<string | null>(null); // Alert for task sync status
  
  // Redux 상태에서 login 상태 가져오기
  const loginState = useSelector((state: RootState) => state.auth.login);
  const dispatch = useDispatch();

  // 로그인 상태를 토글하는 함수
  const handleLogin = (value: boolean) => {
    if (value) {
      dispatch(login());
    } else {
      dispatch(logout());
    }
  };

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

  // 날짜 자동 업데이트 로직
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

    const intervalId = setInterval(checkTime, 60000);
    return () => clearInterval(intervalId);
  }, [currentDate, selectedCategory]);

  const addTodo = () => {
    if (newTodo.trim()) {
      const newTodoItem = {
        id: nextId,
        text: newTodo,
        isCompleted: false,
        date: currentDate,
      };
      const updatedTodos = [...todos, newTodoItem];
      setTodos(updatedTodos);
      setNewTodo('');
      setNextId(nextId + 1);

      // Trigger the onSave function when a new todo is added
      if (onSave) {
        onSave(newTodoItem);
      }

      // Save task to Google Calendar
      if (token) {
        gapi.client.calendar.events.insert({
          calendarId: 'primary',
          resource: {
            summary: newTodoItem.text,
            start: { date: newTodoItem.date },
            end: { date: newTodoItem.date },
          },
        }).then(() => {
          setAlertMessage('할 일이 구글 달력에 연동되었습니다.'); // Success message
        }).catch(() => {
          setAlertMessage('구글 달력에 할 일을 추가하는데 실패했습니다.'); // Error message
        });

        // Save to localStorage
        localStorage.setItem(`todos_${token}`, JSON.stringify(updatedTodos));
        localStorage.setItem(`nextId_${token}`, JSON.stringify(nextId + 1));
      }
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };

  const removeTodo = (id: number) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);

    if (token) {
      localStorage.setItem(`todos_${token}`, JSON.stringify(updatedTodos));
    }
  };

  const toggleTodo = (id: number) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    );
    setTodos(updatedTodos);

    if (token) {
      localStorage.setItem(`todos_${token}`, JSON.stringify(updatedTodos));
    }
  };

  const handleEditClick = (id: number, text: string) => {
    setEditTodoId(id);
    setEditText(text);
    setMenuOpenId(null);
  };

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

  const todayTodos = todos.filter((todo) => todo.date === currentDate);
  const pastTodos = todos.filter((todo) => todo.date !== currentDate);
  const filteredTodos = selectedCategory === 'today' ? todayTodos : pastTodos;

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
                ...
              </button>
              {menuOpenId === todo.id && (
                <div className='absolute top-[-1px] right-10 bg-white w-[58px] border rounded shadow-lg z-50'>
                  <button
                    onClick={() => handleEditClick(todo.id, todo.text)}
                    className='block w-full text-left px-4 py-2 text-black hover:bg-gray-100 text-sm'
                  >
                    수정
                  </button>
                  <button
                    onClick={() => removeTodo(todo.id)}
                    className='block w-full text-left px-4 py-2 text-black hover:bg-gray-100 text-sm'
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
          <div>
            {showToDoList && (
              <div className='bg-white rounded-lg shadow-lg w-72 p-4 border border-gray-300'>
                <div className='mb-4'>
                  <select
                    value={selectedCategory}
                    onChange={(e) =>
                      setSelectedCategory(e.target.value as 'today' | 'past')
                    }
                    className='border rounded-md w-[90px] px-2 py-1'
                  >
                    <option value='today'>오늘</option>
                    <option value='past'>지난 내역</option>
                  </select>
                </div>

                {selectedCategory === 'today' && (
                  <div>
                    {filteredTodos.length === 0 ? (
                      <>
                        <p className='text-gray-500 mb-[13px] ml-[3px]'>
                          할 일이 없습니다. 추가해보세요!
                        </p>
                      </>
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
          <div className='flex justify-end mt-[20px]'>
            <button
              className='px-2 py-2 bg-[#347fff] text-white w-[136px] h-[42px] rounded-md shadow-md text-[15px] font-extrabold'
              onClick={() => setShowToDoList(!showToDoList)}
            >
              오늘 할 일 메모
            </button>
          </div>
        </>
      )}

      {/* ModalAlert for Google Calendar sync status */}
      {alertMessage && (
        <ModalAlert message={alertMessage} onClose={() => setAlertMessage(null)} />
      )}
    </>
  );
};

export default ToDoApp;
