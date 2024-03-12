import { createSlice } from "@reduxjs/toolkit";

export const currencySlice = createSlice({
  name: "currency",
  initialState: {
    currencies: [],
    amount: 0,
    list: [],
   
  },
  reducers: {
    setCurrencies: (state, action) => {
      state.currencies = action.payload;
    },
    setAmount: (state, action) => {
      state.amount = action.payload;
    },
   
    setList: (state, action) => {
      state.list = action.payload;
    },
   
  },
});

export const { setCurrencies, setAmount, setList} = currencySlice.actions;

export default currencySlice.reducer;
