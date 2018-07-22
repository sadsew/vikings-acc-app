import {
  PANELS_TOGGLE_ADD_ACCOUNT_PANEL,
  PANELS_TOGGLE_EDIT_ACCOUNT_PANEL,
  PANELS_TOGGLE_MAIN_MENU_PANEL
} from '../actions/panelsActions';

const initialState = {
  addAccountPanel: {
    class: 'not-showed'
  },
  editAccountPanel: {
    class: 'not-showed',
    editedAccount: {}
  },
  mainMenuPanel: {
    class: 'not-showed'
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case PANELS_TOGGLE_EDIT_ACCOUNT_PANEL:
      return {
        ...state,
        editAccountPanel: {
          class: state.editAccountPanel.class !== 'show' ? 'show' : 'hide',
          editedAccount: action.payload
        }
      };
    case PANELS_TOGGLE_ADD_ACCOUNT_PANEL:
      return {
        ...state,
        addAccountPanel: {
          class: state.addAccountPanel.class !== 'show' ? 'show' : 'hide'
        }
      };
    case PANELS_TOGGLE_MAIN_MENU_PANEL:
      return {
        ...state,
        mainMenuPanel: {
          class: state.mainMenuPanel.class !== 'show' ? 'show' : 'hide'
        }
      };
    default:
      return state;
  }
};
