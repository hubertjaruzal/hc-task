const initialState = {
  list: []
};

const reviews = (state = initialState, action) => {
  switch (action.type) {
  case 'SET_REVIEWS':
    return {
      ...state,
      list: action.data,
    };
  default:
    return state;
  }
};

export default reviews;