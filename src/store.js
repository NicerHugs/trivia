import { configureStore } from '@reduxjs/toolkit'

import { quizApi } from './services/quiz.js'
import resultsReducer from './pages/Results/resultsSlice.js'

export const store = configureStore({
  reducer: {
    [quizApi.reducerPath]: quizApi.reducer,
    results: resultsReducer,
  },
  middleware: (getDefaultMiddleware) =>
   getDefaultMiddleware().concat(quizApi.middleware),
})
