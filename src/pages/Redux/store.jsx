import { createStore } from 'redux';
import cartReducer from './cartreducer'
const store = createStore(cartReducer);

export default store;