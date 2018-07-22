export const PANELS_TOGGLE_ADD_ACCOUNT_PANEL = '@PANELS_TOGGLE_ADDING_PANEL';
export const PANELS_TOGGLE_EDIT_ACCOUNT_PANEL =
  '@PANELS_TOGGLE_EDIT_ACCOUNT_PANEL';
export const PANELS_TOGGLE_MAIN_MENU_PANEL = '@PANELS_TOGGLE_MAIN_MENU_PANEL';

export const toggleAddAccountPanel = () => ({
  type: PANELS_TOGGLE_ADD_ACCOUNT_PANEL
});

export const toggleEditAccountPanel = payload => ({
  type: PANELS_TOGGLE_EDIT_ACCOUNT_PANEL,
  payload
});

export const toggleMainMenuPanel = () => ({
  type: PANELS_TOGGLE_MAIN_MENU_PANEL
});
