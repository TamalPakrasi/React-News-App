import { configureStore } from '@reduxjs/toolkit'

import articleReducer from '../features/article.slice.js'

export const store = configureStore({
  reducer: articleReducer,
})