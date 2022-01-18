import rootReducer from './components/redux/reducers';
import { createStore } from 'redux';

export const store = createStore(
  rootReducer
);
