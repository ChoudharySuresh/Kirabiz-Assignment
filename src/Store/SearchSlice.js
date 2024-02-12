import { createSlice } from "@reduxjs/toolkit";

const SearchSlice = createSlice({
  name: "Search",
  initialState: {
    searchBy: "hs_code",
    query: "1001",
    isButtonClick: false,
  },
  reducers: {
    setSearchBy: (state, action) => {
      state.searchBy = action.payload;
    },
    setQuery: (state, action) => {
      state.query = action.payload;
    },
    setButtonClick: (state, action) => {
      state.isButtonClick = action.payload;
    },
  },
});
export const { setSearchBy, setQuery, setButtonClick } = SearchSlice.actions;

export default SearchSlice.reducer;
