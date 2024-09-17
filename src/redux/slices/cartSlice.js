import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalPrice: 0,
};

const CartSlice = createSlice({
  name: 'Cart',
  initialState,
  reducers: {
    addProduct(state, action) {
      const item = action.payload[0];

      if (!item || !item.prices || typeof item.prices !== 'string') return;

      // Обработка цены
      const priceNumber = parseFloat(item.prices.replace('$', '').replace(',', ''));

      if (isNaN(priceNumber)) return;

      // Логика добавления товара в корзину
      const existingItem = state.items.find((i) => i.id === item.id);

      if (existingItem) {
        existingItem.count++;
      } else {
        state.items.push({ ...item, count: 1 });
      }

      state.totalPrice = state.items.reduce((sum, obj) => {
        const priceNumber = parseFloat(obj.prices.replace('$', '').replace(',', ''));
        return priceNumber * obj.count + sum;
      }, 0);
    },
    minusItem(state, action) {
      const FindItems = state.items.find((obj) => obj.id === action.payload);
      if (FindItems && FindItems.count > 0) {
        FindItems.count--;
      }
      state.totalPrice = state.items.reduce((sum, obj) => {
        const priceNumber = parseFloat(obj.prices.replace('$', '').replace(',', ''));
        return priceNumber * obj.count + sum;
      }, 0);
    },
    PlusItem(state, action) {
      const FindItems = state.items.find((obj) => obj.id === action.payload);
      if (FindItems) {
        FindItems.count++;
      }
      state.totalPrice = state.items.reduce((sum, obj) => {
        const priceNumber = parseFloat(obj.prices.replace('$', '').replace(',', ''));
        return priceNumber * obj.count + sum;
      }, 0);
    },
    RemoveProduct(state, action) {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
      state.totalPrice = state.items.reduce((sum, obj) => {
        const priceNumber = parseFloat(obj.prices.replace('$', '').replace(',', ''));
        return priceNumber * obj.count + sum;
      }, 0);
    },
    ClearProduct(state) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const { addProduct, RemoveProduct, ClearProduct, minusItem, PlusItem } = CartSlice.actions;
export default CartSlice.reducer;
