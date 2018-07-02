// @flow
import { TOGGLE_PANEL } from '../actions/addingPanelActions';

export type AddingPanelState = {
  class: string
};

const initialState = {
  class: 'not-showed'
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
