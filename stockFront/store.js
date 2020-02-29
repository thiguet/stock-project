import { createStore } from 'redux';
import { Reducers } from './src/redux/reducers/index.js';

export const Store = createStore(Reducers);