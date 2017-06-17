import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Box from 'grommet/components/Box';
import Review from 'components/Review';
import WithLoading from 'components/WithLoading';
import * as ReviewsAcctions from './actions';

export class Reviews extends Component {
  componentDidMount() {
    this.props.dispatch(ReviewsAcctions.loadData());
  }

  render() {
    const { data, error, request } = this.props;

    const posts = (!request && data.reviews && data.reviews.length > 0)
      ? data.reviews.map(({ person, score, review, date }, postIndex) =>
        <Review
          date={date}
          person={person}
          score={score}
          review={review}
          key={`review-${postIndex}`}
        />,
      )
      : undefined;

    return (
      <Box align="center">
        <WithLoading request={request}>
          {error || posts}
        </WithLoading>
      </Box>
    );
  }
}

function mapStateToProps(state) {
  const { request, error, data } = state.reviews;
  return {
    request, error, data,
  };
}

Reviews.propTypes = {
  data: PropTypes.shape({
    recommended: PropTypes.string,
    reviews: PropTypes.arrayOf(
      PropTypes.shape({
        person: PropTypes.string,
        score: PropTypes.string,
        date: PropTypes.string,
        date_distance: PropTypes.string,
        review: PropTypes.string,
      }),
    ),
  }),
  dispatch: PropTypes.func,
  error: PropTypes.string,
  request: PropTypes.bool,
};

export default connect(mapStateToProps)(Reviews);
