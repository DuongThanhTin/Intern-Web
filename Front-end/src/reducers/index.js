import {combineReducers} from 'redux';
import cart from './cart'
import products from './products'
const appReducers = combineReducers({
   cart,products
});

export default appReducers;