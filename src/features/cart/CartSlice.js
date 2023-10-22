import { createSlice } from '@reduxjs/toolkit';
import cartItems from '../../cartItems';

//初期状態
const initialState = {
  cartItems: cartItems,
  amount: 4,
  total: 0,
};

//更新状態
const cartSlice = createSlice({
  name: 'cart',
  initialState,

  //全削除の状態のロジックを組む
  reducers: {
    CartCreate: () => {
      return { createItems: [], amount: 0, total: 0 };
    },
  },
});

console.log(cartSlice);

export const { CartCreate } = cartSlice.actions;
export default cartSlice.reducer;
