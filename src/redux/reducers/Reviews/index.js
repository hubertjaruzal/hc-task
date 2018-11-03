const initialState = {
  isLoading: false,
  list: []
};

const reviews = (state = initialState, action) => {
  switch (action.type) {
  case 'REVIEWS_PENDING':
    return {
      ...state,
      isLoading: true,
    };
  case 'GET_REVIEWS':
    return {
      ...state,
      isLoading: false,
      list: action.data,
    };
  default:
    return state;
  }
};

export default reviews;