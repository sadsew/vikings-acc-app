// @flow

type initialState = {
  id: number,
  name: string
};

type actionType = {
  +type: string
};

export default function counter(state: Array<initialState> = [], action: actionType) {
  switch (action.type) {
    case 'ADD_ACCOUNT':
      return state;
    case 'REMOVE_ACCOUNT':
      return state;
    case 'EDIT_ACCOUNT':
      return state;
    default:
      return state;
  }
}
