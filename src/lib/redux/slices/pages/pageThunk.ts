import { createAsyncThunk } from '@reduxjs/toolkit';

const backendUrl = process.env.NEXT_PUBLIC_API_URL;

export const fetchAllPages = createAsyncThunk(
  'page/fetchAllPages',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(`${backendUrl}/api/kalp_tenant_ethical_solar/pages`);
      if (!response.ok) {
        throw new Error('Failed to fetch pages');
      }
      const data = await response.json();
      return data.data;
    } catch (error: any) {
      const errorMessage = error.message || 'An error occurred while fetching pages';
 
      return rejectWithValue(errorMessage);
    }
  }
);
