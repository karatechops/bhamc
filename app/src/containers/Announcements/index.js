import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Spinning from 'grommet/components/icons/Spinning';
import Announcement from 'components/Announcement';
import * as AnnouncementsAcctions from './actions';

export class Announcements extends Component {
  componentDidMount() {
    this.props.dispatch(AnnouncementsAcctions.loadData());
  }

  render() {
    const { data, error, request } = this.props;

    const posts = (!request && data.length > 0)
      ? data.map(({ title, paragraph, id }) =>
        <Announcement
          title={title}
          paragraph={paragraph}
          key={`announcement-${id}`}
        />,
      )
      : <Spinning size="medium" />;

    return (
      <div>
        {error || posts}
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { request, error, data } = state.announcements;
  return {
    request, error, data,
  };
}

Announcements.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      paragraph: PropTypes.string,
    }),
  ),
  dispatch: PropTypes.func,
  error: PropTypes.string,
  request: PropTypes.bool,
};

export default connect(mapStateToProps)(Announcements);
