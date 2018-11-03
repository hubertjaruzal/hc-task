import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Box from './Box';
import Spinner from '../Common/Spinner';

import { getReviews } from '../../redux/actions/Reviews';

import './styles.scss';

class Reviews extends Component {
  componentDidMount() {
    this.props.getReviews();
  }

  render() {
    return (
      <ul className="review-list">
        {
          this.props.reviews.list.length ?
          this.props.reviews.list.map((review) => (
            <Box 
              key={review.id}
              review={review}
            />
          )) :
          <Spinner />
        }
      </ul>
    );
  }
}

Reviews.propTypes = {
  getReviews: PropTypes.func,
  reviews: PropTypes.object,
};

const mapStateToProps = state => ({
  reviews: state.reviews,
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getReviews,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Reviews);
