// @flow

export const ADD_ACCOUNT = '@ACCOUNTS_ADD_ACCOUNT';
export const REMOVE_ACCOUNT = '@ACCOUNTS_REMOVE_ACCOUNT';
export const EDIT_ACCOUNT = '@ACCOUNTS_EDIT_ACCOUNT';

export function addAccount(payload: {}) {
  return {
    type: ADD_ACCOUNT,
    payload
  };
}

export function removeAccount(payload: string) {
  return {
    type: REMOVE_ACCOUNT,
    payload
  };
}

export function editAccount(payload: string) {
  return {
    type: REMOVE_ACCOUNT,
    payload
  };
}
