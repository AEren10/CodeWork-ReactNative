import  basketSlice  from './SliceBasket'; 
import  favoriteSlice  from './SliceFavorites';
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    baskets: basketSlice,
    favorites: favoriteSlice,
});

export default rootReducer;