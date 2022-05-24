import axios from 'axios';

// DEFINICION DE VARIBLES DE ACCION
const GET_API_SUCCESS = 'GET_API_SUCCESS';
const GET_API_LOADING = 'GET_API_LOADING';
const GET_API_ERROR = 'GET_API_ERROR';

// ACTION CREATOR - FUNCION CREADORA
export const getData = (payload) => {
  return function (dispatch) {
    dispatch({ type: GET_API_LOADING, payload: true });
    axios
      .get('https://fakestoreapi.com/products')
      .then((res) => {
        dispatch({ type: GET_API_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: GET_API_ERROR, payload: err });
      })
      .finally(() => {
        dispatch({ type: GET_API_LOADING, payload: false });
      });
  };
};

const initialState = {
  getApi: [],
  loading: false,
  error: null,
};
const getApiReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_API_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case GET_API_SUCCESS:
      return {
        ...state,
        getApi: action.payload,
      };
    case GET_API_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default getApiReducer;
