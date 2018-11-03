import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Box from './Box';

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
          this.props.reviews.list.map((review) => (
            <Box 
              key={review.id}
              review={review}
            />
          ))
        }
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  reviews: state.reviews,
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getReviews,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Reviews);
