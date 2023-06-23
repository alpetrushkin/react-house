import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  location: 0,
  sort: {
    name: 'сначала популярные',
    sortProperty: 'rating'
  },
}

export const filterSlice = createSlice({
  name: 'filtered',
  initialState,
  reducers: {
    setLocation(state, action) {
      state.location = action.payload
    },
    setSortName(state, action) {
      state.sort = action.payload
    },
  },
})

export const { setLocation, setSortName } = filterSlice.actions

export default filterSlice.reducer