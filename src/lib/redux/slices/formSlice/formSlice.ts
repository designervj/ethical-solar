import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchAllForms } from './formThunk';
import { FormInterface } from './fromType';



interface FormState {
  allForms: FormInterface[];
  currentForm: FormInterface | null;
  isFetchedForm: boolean;
  error: string | null;
}

const initialState: FormState = {
  allForms: [],
  currentForm: null,
  isFetchedForm: false,
  error: null,
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setAllForms: (state, action: PayloadAction<FormInterface[]>) => {
      state.allForms = action.payload;
      state.isFetchedForm = true;
      state.error = null;
    },
    setCurrentForm: (state, action: PayloadAction<FormInterface | null>) => {
      state.currentForm = action.payload;
    },
    setFetchError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.isFetchedForm = false;
    },
    resetFormState: (state) => {
      state.allForms = [];
      state.currentForm = null;
      state.isFetchedForm = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllForms.fulfilled, (state, action) => {
      state.allForms = action.payload;
      state.isFetchedForm = true;
      state.error = null;
    });
    builder.addCase(fetchAllForms.rejected, (state, action) => {
      state.error = action.payload as string;
      state.isFetchedForm = false;
    });
  },
});

export const { setAllForms, setCurrentForm, setFetchError, resetFormState } = formSlice.actions;
export default formSlice.reducer;
