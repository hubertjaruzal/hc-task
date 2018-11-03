import { reviews, user } from '../../../utils/data';

const setReviews = (data) => ({
  type: 'SET_REVIEWS',
  data
});

const getReviews = () => (dispatch) => {
    dispatch({ type: 'REVIEWS_PENDING' })
    setTimeout(
      () => dispatch(setReviews(reviews)), 
      2000
    );
};

const addComment = (reviewID, text) => (dispatch, getState) => {
  const comment = {
    text,
    creation_date: '21 September 2016',
    user
  }
  const reviews = getState().reviews.list;
  const review = reviews.find(item => item.id === reviewID);

  setTimeout(
    () => dispatch(setReviews(
      Object.assign(
        [],
        reviews,
        { [reviews.indexOf(review)]: Object.assign({}, review, { comment: comment }) }
      )
    )), 
    2000
  );
};

export {
    getReviews,
    addComment
};