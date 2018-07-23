import { SET_FULLSCREEN_MODE } from '../actions/optionsActions';

const initialState = {
  fullscreen: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_FULLSCREEN_MODE:
      return {
        ...state,
        fullscreen: state.fullscreen === false
      };
    default:
      return state;
  }
};
