import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Box from 'grommet/components/Box';
import { Pagination } from 'containers';
import { Review, WithLoading } from 'components';
import * as ReviewsAcctions from './actions';

export class Reviews extends Component {
  constructor(props) {
    super(props);

    this.state = {
      curentPage: 1,
    };

    this.handlePageClick = this.handlePageClick.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(ReviewsAcctions.loadData());
  }

  handlePageClick(currentPage) {
    this.setState({ currentPage });
  }

  render() {
    const { data, error, request } = this.props;
    const { currentPage } = this.state;
    const posts = (!request && data && data.reviews.length > 0)
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
          <Pagination
            currentPage={currentPage}
            pageViewCount={7}
            pageCount={84}
            onClick={this.handlePageClick}
          />
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
