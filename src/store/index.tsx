import { createStore } from 'redux';
import { dashboardReducer } from './ducks/dashboardReducer';

export const store = createStore(dashboardReducer);

export default store;
