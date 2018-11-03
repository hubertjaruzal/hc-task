import { reviews, user } from '../../../utils/data';

export const doesReviewsExists = () => {
  if (window.localStorage && window.localStorage.hcReviews) {
      return true;
  }
  return false;
};

const setReviews = (data) => ({
  type: 'SET_REVIEWS',
  data
});

const getReviews = (cb = () => {}) => (dispatch) => {
    setTimeout(
      () => {
        cb();
        dispatch(
          setReviews(doesReviewsExists() ? JSON.parse(window.localStorage.hcReviews) : reviews)
        );
      },
      2000
    );
};

const addComment = (reviewID, text, cb = () => {}) => (dispatch, getState) => {
  const comment = {
    text,
    creation_date: '21 September 2016',
    user
  }
  const reviews = getState().reviews.list;
  const review = reviews.find(item => item.id === reviewID);

  const updatedReviews = Object.assign(
    [],
    reviews,
    { [reviews.indexOf(review)]: Object.assign({}, review, { comment: comment }) }
  );

  setTimeout(
    () => {
      cb();
      dispatch(setReviews(updatedReviews))
    }, 
    2000
  );

  window.localStorage.setItem('hcReviews', JSON.stringify(updatedReviews));
};

export {
    getReviews,
    addComment
};