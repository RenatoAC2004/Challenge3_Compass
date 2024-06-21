export const SAVE_CHECKOUT_FORM_DATA = "SAVE_CHECKOUT_FORM_DATA";

interface SaveFormDataAction {
  type: typeof SAVE_CHECKOUT_FORM_DATA;
  payload: object;
}

export const saveFormData = (formData: object): SaveFormDataAction => ({
  type: SAVE_CHECKOUT_FORM_DATA,
  payload: formData,
});

export type FormActionTypes = SaveFormDataAction;
