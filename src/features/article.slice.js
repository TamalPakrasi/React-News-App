import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  articles: {},
};

const articleSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {
    setArticles: (state, action) => {
      const catagory = Object.keys(action.payload)[0];
      const data = action.payload[catagory];

      if (!state.articles[catagory]) state.articles[catagory] = data;
    },
  },
});

export const { setArticles } = articleSlice.actions;

export default articleSlice.reducer;
