// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import accountsReducer from './accountsReducer';
import configReducer from './configsReducer';
import addingPanelReducer from './addingPanelReducer';

const rootReducer = combineReducers({
  accounts: accountsReducer,
  config: configReducer,
  addingPanel: addingPanelReducer,
  router
});

export default rootReducer;
