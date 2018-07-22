import uuidv4 from 'uuid/v4';
import {
  ADD_ACCOUNT,
  REMOVE_ACCOUNT,
  EDIT_ACCOUNT,
  LOGIN_ACCOUNT,
  LOGOUT_ACCOUNT,
  RESTORE_ACCOUNTS
} from '../actions/accountsActions';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case RESTORE_ACCOUNTS: {
      const newAccountsArray = action.payload;
      return newAccountsArray;
    }
    case ADD_ACCOUNT: {
      const newAccount = action.payload;
      return [
        ...state,
        {
          id: uuidv4(),
          logged: false,
          ...newAccount
        }
      ];
    }
    case REMOVE_ACCOUNT: {
      const newState = state.filter(account => account.id !== action.payload);
      return newState;
    }
    case EDIT_ACCOUNT: {
      const updatedItems = state.map(item => {
        if (item.id === action.payload.id) {
          return { ...item, ...action.payload };
        }
        return item;
      });
      return updatedItems;
    }
    case LOGIN_ACCOUNT: {
      const updatedItems = state.map(item => {
        if (item.id === action.payload) {
          return { ...item, logged: true };
        }
        return item;
      });
      return updatedItems;
    }
    case LOGOUT_ACCOUNT: {
      const updatedItems = state.map(item => {
        if (item.id === action.payload) {
          return { ...item, logged: false };
        }
        return item;
      });
      return updatedItems;
    }
    default:
      return state;
  }
};
