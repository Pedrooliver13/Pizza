import { createStore } from 'redux';
import reducers from './modules/rootReduce';

const store = createStore(reducers);

export default store;
