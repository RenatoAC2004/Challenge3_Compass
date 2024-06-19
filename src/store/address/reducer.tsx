
import {
    FETCH_ADDRESS_REQUEST,
    FETCH_ADDRESS_SUCCESS,
    FETCH_ADDRESS_FAILURE,
    AddressActionTypes,
    Address,
  } from './actions';
  
  interface AddressState {
    address: Address | null;
    loading: boolean;
    error: string | null;
  }
  
  const initialState: AddressState = {
    address: null,
    loading: false,
    error: null,
  };
  
  const addressReducer = (state = initialState, action: AddressActionTypes): AddressState => {
    switch (action.type) {
      case FETCH_ADDRESS_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case FETCH_ADDRESS_SUCCESS:
        return {
          ...state,
          address: action.payload,
          loading: false,
          error: null,
        };
      case FETCH_ADDRESS_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default addressReducer;
  