import { createSlice } from "@reduxjs/toolkit";

const initialStateCustomer = {
  fullName: "",
  nationalID: "",
  createdAt: "",
};

const customerSlice = createSlice({
  name: "customer",
  initialState: initialStateCustomer,
  reducers: {
    createCustomer(state, action) {
      state.fullName = action.payload.fullName;
      state.nationalID = action.payload.nationalID;
      state.createdAt = new Date().toISOString();
    },

    updateName(state, action) {
      state.fullName = action.payload.fullName;
    },
  },
});

export const { updateName, createCustomer } = customerSlice.actions;
export default customerSlice.reducer;
