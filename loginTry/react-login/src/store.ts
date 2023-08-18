// store.ts
import { combineReducers, createStore } from 'redux';
import userReducer from './reducers/userReducer';

const rootReducer = combineReducers({
  user: userReducer,
  // Other reducers go here
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer);

export default store;
