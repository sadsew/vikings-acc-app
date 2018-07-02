const PANELS_TOGGLE_ADDING_PANEL = '@PANELS_TOGGLE_ADDING_PANEL';
const PANELS_TOGGLE_ACCOUNT_CONFIG_PANEL =
  '@PANELS_TOGGLE_ACCOUNT_CONFIG_PANEL';
const PANELS_TOGGLE_MAIN_MENU_PANEL = '@PANELS_TOGGLE_MAIN_MENU_PANEL';

export const toggleAddingPanel = () => ({ type: PANELS_TOGGLE_ADDING_PANEL });
export const toggleAccountConfigPanel = () => ({
  type: PANELS_TOGGLE_ACCOUNT_CONFIG_PANEL
});
export const toggleMainMenuPanel = () => ({
  type: PANELS_TOGGLE_MAIN_MENU_PANEL
});
