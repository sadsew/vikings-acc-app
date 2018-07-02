// @flow

import uuidv4 from 'uuid/v4';
import {
  ADD_ACCOUNT,
  REMOVE_ACCOUNT,
  EDIT_ACCOUNT
} from '../actions/accountsActions';

type State =
  | {
      id: string,
      name: string,
      type: string,
      packDate: string,
      comments: string,
      favorite: boolean
    }
  | { id: string };

export type actionType =
  | { +type: typeof ADD_ACCOUNT, payload: {} }
  | { +type: typeof REMOVE_ACCOUNT, payload: {} }
  | { type: $Subtype<string> };

const initialState = [];

export default (state: Array<State> = initialState, action: actionType) => {
  switch (action.type) {
    case ADD_ACCOUNT: {
      const newAccount = action.payload;
      return [
        ...state,
        {
          id: uuidv4(),
          ...newAccount
        }
      ];
    }
    case REMOVE_ACCOUNT: {
      console.log('remove ', action.payload);
      return state;
    }
    case EDIT_ACCOUNT: {
      console.log('edit ', action.payload);
      return state;
    }
    default:
      return state;
  }
};
