import  basketSlice  from './SliceBasket'; 
import  favoriteSlice  from './SliceFavorites';
import  CounterSlice from './SliceCounter'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    baskets: basketSlice,
    favorites: favoriteSlice,
    Counter : CounterSlice,
});

export default rootReducer;