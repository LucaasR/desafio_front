import { createStore, combineReducers } from 'redux';
import { dashboardReducer } from 'store/ducks/dashboard';
import { authUser } from 'store/ducks/auth';

const reducers = combineReducers({
  dashboard: dashboardReducer,
  auth: authUser,
});

export const store = createStore(reducers);

export default store;
