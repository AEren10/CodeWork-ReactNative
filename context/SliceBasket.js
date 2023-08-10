import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  baskets : []
}

const basketSlice = createSlice({
    name: 'baskets',
    initialState,
    reducers: {
      addBasket: (state,action) => {
        state.baskets.push(action.payload)
      },
      removeBasket: (state,action) => {
        state.baskets.pop(action.payload)
      },
    },
  })
  
export const { addBasket,removeBasket } = basketSlice.actions

export default basketSlice.reducer