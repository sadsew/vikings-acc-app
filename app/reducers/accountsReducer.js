// @flow

import uuidv4 from 'uuid/v4';
import { ADD_ACCOUNT, REMOVE_ACCOUNT } from '../actions/accountsActions';

type State =
  | {
      id: string,
      name: string,
      type: string,
      resType: string,
      resValue: number,
      silverValue: number,
      packDate: string,
      comments: string,
      options: {}
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
      const newState = [];
      return newState;
    }
    default:
      return state;
  }
};

// function createNewAccountsArray(accountsFromState, newAccount) {
//   const newAccountsArray = accountsFromState;
//   newAccountsArray.push({
//     id: uuidv4(),
//     ...newAccount
//   });
//   return newAccountsArray;
// }

// import uuidv4 from 'uuid/v4';
// import { ADD_ACCOUNT, REMOVE_ACCOUNT } from '../actions/accountsActions';

// type State = {
//   id: string,
//   name: string,
//   type: number,
//   resType: number,
//   resValue: number,
//   packDate: string,
//   options: {}
// } | { id: string };

// export type actionType =
//   { +type: typeof ADD_ACCOUNT, payload: {} } |
//   { +type: typeof REMOVE_ACCOUNT, payload: {} } |
//   { type: $Subtype<string> };

// const initialState = [];

// export default (state: Array<State> = initialState, action: actionType) => {
//   switch (action.type) {
//     case ADD_ACCOUNT: {
//       const newState = createNewAccountsArray(state, action.payload);
//       return newState;
//     }
//     case REMOVE_ACCOUNT: {
//       const newState = [];
//       return newState;
//     }
//     default:
//       return state;
//   }
// }

// function createNewAccountsArray(accountsFromState, newAccount) {
//   const newAccountsArray = accountsFromState;
//   newAccountsArray.push({
//     id: uuidv4(),
//     ...newAccount
//   });
//   return newAccountsArray;
// }
