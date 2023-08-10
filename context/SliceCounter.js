import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    Counter: 1
}

const CounterSlice = createSlice({
    name: 'Counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.Counter += 1;
        },
        decrement: (state) => {       
            state.Counter -= 1;
        },
    },
  })
  
export const {  increment , decrement } = CounterSlice.actions

export default CounterSlice.reducer