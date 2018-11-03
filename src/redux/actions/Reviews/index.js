import { reviews } from '../../../utils/data';

const getReviews = () => (dispatch) => {
    dispatch({ type: 'REVIEWS_PENDING' })
    setTimeout(
      () => dispatch({
        type: 'GET_REVIEWS',
        data: reviews
      }), 
      2000
    );
};

export {
    getReviews
};