export const ADD_ACCOUNT = '@ACCOUNTS_ADD_ACCOUNT';
export const REMOVE_ACCOUNT = '@ACCOUNTS_REMOVE_ACCOUNT';
export const EDIT_ACCOUNT = '@ACCOUNTS_EDIT_ACCOUNT';
export const LOGIN_ACCOUNT = '@ACCOUNTS_LOGIN_ACCOUNT';
export const LOGOUT_ACCOUNT = '@ACCOUNTS_LOGOUT_ACCOUNT';
export const RESTORE_ACCOUNTS = '@ACCOUNTS_RESTORE_ACCOUNTS';

export function addAccount(payload) {
  return {
    type: ADD_ACCOUNT,
    payload
  };
}

export function removeAccount(payload) {
  return {
    type: REMOVE_ACCOUNT,
    payload
  };
}

export function editAccount(payload) {
  return {
    type: EDIT_ACCOUNT,
    payload
  };
}

export function accountLogIn(payload) {
  return {
    type: LOGIN_ACCOUNT,
    payload
  };
}

export function accountLogOut(payload) {
  return {
    type: LOGOUT_ACCOUNT,
    payload
  };
}

export function restoreAccounts(payload) {
  return {
    type: RESTORE_ACCOUNTS,
    payload
  };
}
