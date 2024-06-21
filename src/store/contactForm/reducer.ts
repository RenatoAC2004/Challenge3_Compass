import { ContactFormActionTypes, SAVE_CONTACT_FORM_DATA } from "./actions";

interface ContactFormState {
  formData: object;
}

const initialState: ContactFormState = {
  formData: {},
};

const contactFormReducer = (state = initialState, action: ContactFormActionTypes): ContactFormState => {
  switch (action.type) {
    case SAVE_CONTACT_FORM_DATA:
      return {
        ...state,
        formData: action.payload,
      };
    default:
      return state;
  }
};

export default contactFormReducer;