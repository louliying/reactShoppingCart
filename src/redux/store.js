// import {createStore, applyMiddleware, compose} from 'redux';
import {createStore} from 'redux';
import reducers from './reducers';
import productsData from '../data/products';

export default createStore(
	reducers,
	{
		products: productsData
	}
);
