import axios from 'axios';
import { ThunkAction } from 'redux-thunk';
import { AnyAction } from 'redux';
import { RootReducer } from '..';

export const FETCH_ADDRESS_REQUEST = 'FETCH_ADDRESS_REQUEST';
export const FETCH_ADDRESS_SUCCESS = 'FETCH_ADDRESS_SUCCESS';
export const FETCH_ADDRESS_FAILURE = 'FETCH_ADDRESS_FAILURE';

interface FetchAddressRequestAction {
  type: typeof FETCH_ADDRESS_REQUEST;
}

interface FetchAddressSuccessAction {
  type: typeof FETCH_ADDRESS_SUCCESS;
  payload: Address;
}

interface FetchAddressFailureAction {
  type: typeof FETCH_ADDRESS_FAILURE;
  payload: string;
}

export type AddressActionTypes =
  | FetchAddressRequestAction
  | FetchAddressSuccessAction
  | FetchAddressFailureAction;

export interface Address {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
}

export const fetchAddress = (
  cep: string
): ThunkAction<void, RootReducer, unknown, AnyAction> => {
  return async dispatch => {
    dispatch({ type: FETCH_ADDRESS_REQUEST });
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json`);
      dispatch({ type: FETCH_ADDRESS_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({
        type: FETCH_ADDRESS_FAILURE,
        payload: error instanceof Error ? error.message : 'An error occurred',
      });
    }
  };
};
