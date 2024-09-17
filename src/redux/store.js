import { configureStore } from '@reduxjs/toolkit';
import filterSlice from '../redux/slices/filterSlice';
import Cart from '../redux/slices/cartSlice';
import MoreSlice from '../redux/slices/MoreSlice';
import FavSlices from '../redux/slices/FavSlice';

export const store = configureStore({
  reducer: { filterSlice, FavSlices, Cart, MoreSlice },
});
