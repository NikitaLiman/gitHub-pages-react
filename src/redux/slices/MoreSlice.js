import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};
const MoreSlice = createSlice({
  name: 'MoreSlice',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
});
export const { setItems } = MoreSlice.actions;
export default MoreSlice.reducer;
