// @flow

export type AddingPanelState = {
  class: string,
  form: {
    type: number,
    name: string,
    date: string
  }
};

const initialState = {
  class: 'hide',
  form: {
    type: 0,
    name: '',
    date: ''
  }
};

type actionType = {
  +type: string
};

export default function counter(state: AddingPanelState = initialState, action: actionType) {
  switch (action.type) {
    case 'TEST':
      return state;
    default:
      return state;
  }
}
