import { createSlice } from '@reduxjs/toolkit';

// 초기 상태 설정
const initialState = {
  login: false,
};

// Slice 생성 (Reducer와 Actions를 함께 관리)
const loginSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state) => {
      state.login = true; // 로그인 상태로 변경
    },
    logout: (state) => {
      state.login = false; // 로그아웃 상태로 변경
    },
  },
});

// 액션을 export
export const { login, logout } = loginSlice.actions;
export default loginSlice.reducer;
