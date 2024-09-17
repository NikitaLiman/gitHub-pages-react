import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sideBar: 0,
  sort: {
    name: 'Popularity',
    sort: 'rating',
  },
};

const filterSlice = createSlice({
  name: 'filtes',
  initialState,
  reducers: {
    setsidebar(state, action) {
      console.log(action);
      state.sideBar = action.payload;
    },
    setsort(state, action) {
      state.sort = action.payload;
    },
  },
});
export const { setsidebar, setsort } = filterSlice.actions;
export default filterSlice.reducer;
