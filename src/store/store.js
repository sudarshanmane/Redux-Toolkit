import {
  deposit,
  payLoan,
  requestLoan,
  withdraw,
} from "../Components/account/accounts";
import customerReducer, {
  createCustomer,
  updateName,
} from "../Components/customer/customers";
import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "../Components/account/accounts";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: { account: accountReducer, customer: customerReducer },
});

// store.dispatch(deposit(1000));
store.dispatch(withdraw({ amount: 200 }));
store.dispatch(requestLoan(200, "loanPurpose"));
store.dispatch(payLoan(100));
store.dispatch(createCustomer({ fullName: "customer_1", nationalID: 1 }));
store.dispatch(updateName({ fullName: "customer_01" }));

console.log(store.getState());

// for async operations
export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await fetch("/api/users");
  const data = await response.json();
  return data;
});
