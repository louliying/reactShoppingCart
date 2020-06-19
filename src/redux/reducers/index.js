import {combineReducers} from 'redux';

import cartReducer from './cart';
import productsReducer from './product';

export default combineReducers({
	cart: cartReducer,
	products: productsReducer
});