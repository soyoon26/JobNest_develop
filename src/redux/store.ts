import { configureStore } from '@reduxjs/toolkit';
import contractReducer from './contractSlice';
import loginReducer from './loginSlice';

const store = configureStore({
  reducer: {
    contract: contractReducer,
    auth: loginReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
