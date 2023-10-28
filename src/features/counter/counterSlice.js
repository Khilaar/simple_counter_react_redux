import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    number: 0,
  },
  reducers: {
    increase: (state) => {

        state.number += 1
    },

    decrease: (state) => {
        state.number -= 1
    },

    increaseByCustomNumber: (state, action) => {
        const number = action.payload
        
        state.number += number 
    }

  },
});

export const { increase, decrease, increaseByCustomNumber } = counterSlice.actions;

export default counterSlice.reducer;