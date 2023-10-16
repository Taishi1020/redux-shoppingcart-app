import { createSlice } from "@reduxjs/toolkit";

//状態の初期値

const initialState = {
    createItems: {},
    amount: 4,
    total: 0,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {},
})


export default cartSlice.reducer;