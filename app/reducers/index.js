import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import accountsReducer from './accountsReducer';
import panelsReducer from './panelsReducer';
import optionsReducer from './optionsReducer';

const rootReducer = combineReducers({
  accounts: accountsReducer,
  panels: panelsReducer,
  options: optionsReducer,
  router
});

export default rootReducer;
