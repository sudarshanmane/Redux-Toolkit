import React from "react";
import { useSelector } from "react-redux";

const CustomerComponent = () => {
  const customerSelector = useSelector((state) => state.customer);
  console.log(
    "-----------------------------------------------------------------------------"
  );
  console.log(customerSelector);
  return <div>Welcome, {customerSelector.fullName}</div>;
};

export default CustomerComponent;
