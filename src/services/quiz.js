import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { API_URL } from '../constants/urls.js';

export const quizApi = createApi({
  reducerPath: 'quizApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getQuestionsByCount: builder.query({
      query: (count) => `?amount=${count}&difficulty=hard&type=boolean`,
    }),
  }),
})

export const { useGetQuestionsByCountQuery } = quizApi
