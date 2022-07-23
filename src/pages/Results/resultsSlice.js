import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const resultsSlice = createSlice({
  name: 'results',
  initialState,
  reducers: {
    //set response to a single question
    setUserResponse: (state, action) => {
      state.value[action.payload.index] = action.payload.response;
    },
    //reset all responses for playing again
    clear: () => initialState
  },
})

export const { setUserResponse, clear } = resultsSlice.actions

export default resultsSlice.reducer
