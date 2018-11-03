const initialState = {
    isLoading: false,
    list: []
};

const reviews = (state = initialState, action) => {
    switch (action.type) {
    case 'GET_REVIEWS':
        return {
            ...state,
            list: action.data,
        };
    default:
        return state;
    }
};

export default reviews;