export const GET_PRODUCT_SUCCESS = 'GET_PRODUCT_SUCCESS';
export const GET_PRODUCT_LOADING = 'GET_PRODUCT_LOADING';
export const GET_PRODUCT_ERROR = 'GET_PRODUCT_ERROR';

const initialState = {
  getCard: [],
  loading: false,
  error: null,
};
const getProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCT_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case GET_PRODUCT_SUCCESS:
      return {
        ...state,
        getCard: action.payload,
      };
    case GET_PRODUCT_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default getProductReducer;
