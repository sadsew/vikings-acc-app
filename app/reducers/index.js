import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import accountsReducer from './accountsReducer';
import panelsReducer from './panelsReducer';

const rootReducer = combineReducers({
  accounts: accountsReducer,
  panels: panelsReducer,
  router
});

export default rootReducer;
