import { createSlice } from "@reduxjs/toolkit";

const ContactSlice = createSlice({
  name: "Contact",
  initialState: {
    contact: [],
  },
  reducers: {
    setContact: (state, action) => {
      state.contact.push(action.payload);
    },
  },
});
export const { setContact } = ContactSlice.actions;

export default ContactSlice.reducer;
