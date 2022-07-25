import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    updateFilter(state, { payload }) {
      return payload;
    },
  },
});

export const filterReducer = filterSlice.reducer;

export const { updateFilter } = filterSlice.actions;

// Selectors

export const getFilterValue = state => state.filter;
