import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchAllPages } from './pageThunk';

interface PageState {
  allPages: any[];
  currentPages: any;
  isFetched: boolean;
  error: string | null;
}

const initialState: PageState = {
  allPages: [],
  currentPages: null,
  isFetched: false,
  error: null,
};

const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    setAllPages: (state, action: PayloadAction<any[]>) => {
      state.allPages = action.payload;
      state.isFetched = true;
      state.error = null;
    },
    setCurrentPage: (state, action: PayloadAction<any>) => {
      state.currentPages = action.payload;
    },
    setFetchError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.isFetched = false;
    },
    resetPageState: (state) => {
      state.allPages = [];
      state.currentPages = null;
      state.isFetched = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllPages.fulfilled, (state, action) => {
      state.allPages = action.payload;
      state.isFetched = true;
      state.error = null;
    });
    builder.addCase(fetchAllPages.rejected, (state, action) => {
      state.error = action.payload as string;
      state.isFetched = false;
    });
  },
});

export const { setAllPages, setCurrentPage, setFetchError, resetPageState } = pageSlice.actions;
export default pageSlice.reducer;
