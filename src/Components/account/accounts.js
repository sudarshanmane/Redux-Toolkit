import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  balance: 0,
  loan: 0,
  amount: 0,
  loanPurpose: "",
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    deposit(state, action) {
      state.balance = action;
    },
    withdraw(state, action) {
      console.log("deposit", action);
      state.balance -= action.payload;
    },
    payLoan(state, action) {
      state.loan = action.payload.loanAmount;
      state.balance -= action.payload.loanAmount;
    },
    requestLoan(state, action) {
      state.loan = action.payload.amount;
      state.balance = Math.abs(state.balance - action.payload.loanAmount);
    },
  },
});

export const { withdraw, requestLoan, payLoan } = accountSlice.actions;

export function deposit(amount) {
  return async function (dispatch, getState) {
    const data = await fetch("https://fakestoreapi.com/products");
    let data1 = await data.json();
    dispatch({ type: "account/deposit", payload: amount, fetchedData: data1 });
  };
}

export default accountSlice.reducer;
