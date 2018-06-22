// @flow
import { TOGGLE_PANEL } from '../actions/addingPanelActions';

export type AddingPanelState = {
  class: string,
  form: {
    type: number,
    name: string,
    packDate: string,
    resType: [],
    resValue: number
  }
};

const initialState = {
  class: 'not-showed',
  form: {
    type: 0,
    name: '',
    packDate: '',
    resType: [],
    resValue: 0
  }
};

type actionType = {
  +type: string
};

export default (state: AddingPanelState = initialState, action: actionType) => {
  switch (action.type) {
    case TOGGLE_PANEL:
      return {
        ...state,
        class: state.class !== 'show' ? 'show' : 'hide'
      };
    default:
      return state;
  }
};
