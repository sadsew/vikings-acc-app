// @flow

export type ConfigsState = {
  foo: number,
  bar: boolean,
  baz: string
};

const initialState = {
  foo: 1,
  bar: true,
  baz: 'three',
};

type actionType = {
  +type: string
};

export default function counter(state: ConfigsState = initialState, action: actionType) {
  switch (action.type) {
    case 'UPDATE_CONFIGS':
      return state;
    default:
      return state;
  }
}
