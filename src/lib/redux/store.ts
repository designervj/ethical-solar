import { configureStore } from '@reduxjs/toolkit';
import pageReducer from './slices/pages/pageSlice';
import formReducer from './slices/formSlice/formSlice';

export const store = configureStore({
  reducer: {
    page: pageReducer,
    form: formReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
