import { SAVE_CHECKOUT_FORM_DATA, FormActionTypes } from "./actions";

interface FormState {
  formData: object;
}

const initialState: FormState = {
  formData: {},
};

const formReducer = (state = initialState, action: FormActionTypes): FormState => {
  switch (action.type) {
    case SAVE_CHECKOUT_FORM_DATA:
      return {
        ...state,
        formData: action.payload,
      };
    default:
      return state;
  }
};

export default formReducer;
