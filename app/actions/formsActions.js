const FORMS_SET_FORM = 'FORMS_SET_FORM';
const FORMS_SET_TEXT_INPUT = 'FORMS_UPDATE_TEXT_INPUT';
const FORMS_SET_CHECK_BLOCK = 'FROMS_UPDATE_RESTYPE';

export const setForm = (payload: string) => ({ type: FORMS_SET_FORM, payload });
export const setTextInput = (payload: string) => ({
  type: FORMS_SET_TEXT_INPUT,
  payload
});
export const setCheckBlock = (payload: string) => ({
  type: FORMS_SET_CHECK_BLOCK,
  payload
});
