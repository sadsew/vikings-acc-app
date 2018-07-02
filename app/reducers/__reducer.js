const LOAD_PREFS_SUCCESS = 'LOAD_PREFS_SUCCESS';
const UPDATE_PREF = 'UPDATE_PREF';

export type actionType =
  | {
      +type: typeof LOADING_SUCCESS,
      payload: string
    }
  | {
      +type: typeof UPDATE_PREF,
      payload: string
    }
  | { type: $Subtype<string> };

export default (state: boolean = false, action: actionType) => {
  switch (action.type) {
    case LOAD_PREFS_SUCCESS: {
      const newState = action.payload;
      return newState;
    }
    case UPDATE_PREF: {
      const newState = action.payload;
      return newState;
    }
    default:
      return state;
  }
};
