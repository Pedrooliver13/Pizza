import { createStore } from "redux";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootReducer from './modules/rootReduce';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ["pizzaReducer"]
}

const composeEnhancers =
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const persistReduce = persistReducer(persistConfig, rootReducer)
const store = createStore(persistReduce, composeEnhancers);
const persistor = persistStore(store);

export { store, persistor };
