import { combineReducers } from 'react-redux';
import basketSlice from './SliceBasket';
import favoriteSlice from './SliceFavorites';
// import  CounterSlice from './SliceCounter'

const rootReducer = combineReducers({
  baskets: basketSlice,
  favorites: favoriteSlice,
  // Counter : CounterSlice,
});

export default rootReducer;
