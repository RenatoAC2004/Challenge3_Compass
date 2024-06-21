export const SAVE_CONTACT_FORM_DATA = "SAVE_CONTACT_FORM_DATA";

interface ContactFormData {
  yourName: string;
  email: string;
  subject: string;
  message: string;
}

export interface SaveContactFormDataAction {
  type: typeof SAVE_CONTACT_FORM_DATA;
  payload: ContactFormData;
}

export const saveContactFormData = (formData: ContactFormData): SaveContactFormDataAction => ({
  type: SAVE_CONTACT_FORM_DATA,
  payload: formData,
});

export type ContactFormActionTypes = SaveContactFormDataAction;