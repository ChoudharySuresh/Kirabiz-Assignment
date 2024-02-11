import { configureStore } from "@reduxjs/toolkit";
import ContactSlice from "./ContactSlice";
import SearchSlice from "./SearchSlice";
const store = configureStore({
  reducer: {
    contact: ContactSlice,
    search: SearchSlice,
  },
});

export default store;
