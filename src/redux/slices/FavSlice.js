import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const FavSlice = createSlice({
  name: 'Fav',
  initialState,
  reducers: {
    AccItem(state, action) {
      const newItems = action.payload;

      newItems.forEach((item) => {
        const existingItem = state.items.find((i) => i.id === item.id);

        if (existingItem) {
          // Если продукт уже существует, обновляем его количество
          existingItem.isFavorite = true;
        } else {
          // Если продукт не существует, добавляем его в корзину
          state.items.push({ ...item, isFavorite: true });
        }
      });
    },
    ClearAll(state) {
      state.items = [];
    },
    RemoveItem(state, action) {
      const item = state.items.find((obj) => obj.id === action.payload);
      if (item) {
        item.isFavorite = false;
      }
      state.items = state.items.filter((obj) => obj.id !== action.payload);
    },
  },
});
export const { AccItem, ClearAll, RemoveItem } = FavSlice.actions;
export default FavSlice.reducer;
