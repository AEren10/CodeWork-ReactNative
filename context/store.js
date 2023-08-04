import { configureStore } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  favorites : []
}

const favoriteSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorites: (state,action) => {
        state.favorites.push(action.payload)
    },
    
  },
})

export const { addFavorites } = favoriteSlice.actions

const store = configureStore({
  reducer: {
    favorites: favoriteSlice.reducer
  },
})

export default store;


