import { reviews } from '../../../utils/data';

const getReviews = (index) => (dispatch, getState) => {
    dispatch({
        type: 'GET_REVIEWS',
        data: reviews
    });
};

export {
    getReviews
};