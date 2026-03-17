import { createAsyncThunk } from '@reduxjs/toolkit';
import { FormInterface } from './fromType';

const backendUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5001";
console.log('Backend URL:', backendUrl);

export const fetchAllForms = createAsyncThunk(
  'form/fetchAllForms',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(`${backendUrl}/api/kalp_tenant_ethical_solar/forms`);
      if (!response.ok) {
        throw new Error('Failed to fetch forms');
      }
      const data = await response.json();
      return data.data;
    } catch (error: any) {
      const errorMessage = error.message || 'An error occurred while fetching forms';
      return rejectWithValue(errorMessage);
    }
  }
);

// create form
export const createForm = createAsyncThunk(
  'form/createForm',
  async (form: FormInterface, { rejectWithValue }) => {
    try {
      const response = await fetch(`${backendUrl}/api/kalp_tenant_ethical_solar/forms`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });
      if (!response.ok) {
        throw new Error('Failed to create form');
      }
      const data = await response.json();
      return data;
    } catch (error: any) {
      const errorMessage = error.message || 'An error occurred while creating form';
      return rejectWithValue(errorMessage);
    }
  }
);