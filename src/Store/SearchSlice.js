import { createSlice } from "@reduxjs/toolkit";

const SearchSlice = createSlice({
  name: "Search",
  initialState: {
    searchBy: "hs_code",
    query: "",
  },
  reducers: {
    setSearchBy: (state, action) => {
      state.searchBy = action.payload;
    },
    setQuery: (state, action) => {
      state.query = action.payload;
    },
  },
});
export const { setSearchBy, setQuery } = SearchSlice.actions;

export default SearchSlice.reducer;
