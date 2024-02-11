import { configureStore } from "@reduxjs/toolkit";
import ContactSlice from "./ContactSlice";
const store = configureStore({
  reducer: {
    contact: ContactSlice,
  },
});

export default store;
