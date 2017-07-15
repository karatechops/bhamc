import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Box from 'grommet/components/Box';
import DoctorPost from 'components/DoctorPost';
import WithLoading from 'components/WithLoading';
import ImageGallery from 'containers/ImageGallery';
import * as DoctorsActions from '../Doctors/actions';

const IMAGES = [
  {
    title: 'pets 1',
    description: 'pets 1',
    original: 'https://s3.amazonaws.com/bhamc-assets/images/photos/000/000/004/original/schutt1.jpg?1491083769',
    thumb: 'https://s3.amazonaws.com/bhamc-assets/images/photos/000/000/004/thumb/schutt1.jpg?1491083769',
    icon: 'https://s3.amazonaws.com/bhamc-assets/images/photos/000/000/004/icon/schutt1.jpg?149108376'
  },
  {
    title: 'pets 1',
    description: 'pets 1',
    original: 'https://s3.amazonaws.com/bhamc-assets/images/photos/000/000/004/original/schutt1.jpg?1491083769',
    thumb: 'https://s3.amazonaws.com/bhamc-assets/images/photos/000/000/004/thumb/schutt1.jpg?1491083769',
    icon: 'https://s3.amazonaws.com/bhamc-assets/images/photos/000/000/004/icon/schutt1.jpg?149108376'
  },
  {
    title: 'pets 1',
    description: 'pets 1',
    original: 'https://s3.amazonaws.com/bhamc-assets/images/photos/000/000/004/original/schutt1.jpg?1491083769',
    thumb: 'https://s3.amazonaws.com/bhamc-assets/images/photos/000/000/004/thumb/schutt1.jpg?1491083769',
    icon: 'https://s3.amazonaws.com/bhamc-assets/images/photos/000/000/004/icon/schutt1.jpg?149108376'
  },
  {
    title: 'pets 1',
    description: 'pets 1',
    original: 'https://s3.amazonaws.com/bhamc-assets/images/photos/000/000/004/original/schutt1.jpg?1491083769',
    thumb: 'https://s3.amazonaws.com/bhamc-assets/images/photos/000/000/004/thumb/schutt1.jpg?1491083769',
    icon: 'https://s3.amazonaws.com/bhamc-assets/images/photos/000/000/004/icon/schutt1.jpg?149108376'
  },
  {
    title: 'pets 1',
    description: 'pets 1',
    original: 'https://s3.amazonaws.com/bhamc-assets/images/photos/000/000/004/original/schutt1.jpg?1491083769',
    thumb: 'https://s3.amazonaws.com/bhamc-assets/images/photos/000/000/004/thumb/schutt1.jpg?1491083769',
    icon: 'https://s3.amazonaws.com/bhamc-assets/images/photos/000/000/004/icon/schutt1.jpg?149108376'
  },
  {
    title: 'pets 1',
    description: 'pets 1',
    original: 'https://s3.amazonaws.com/bhamc-assets/images/photos/000/000/004/original/schutt1.jpg?1491083769',
    thumb: 'https://s3.amazonaws.com/bhamc-assets/images/photos/000/000/004/thumb/schutt1.jpg?1491083769',
    icon: 'https://s3.amazonaws.com/bhamc-assets/images/photos/000/000/004/icon/schutt1.jpg?149108376'
  },
];

export class Doctor extends Component {
  componentDidMount() {
    this.props.dispatch(DoctorsActions.loadData());
  }
  findDoctor(id, doctors) {
    return doctors.find(doctor => doctor.id.toString() === id);
  }
  render() {
    const { data, error, request, id } = this.props;
    const doctor = (!request && data.length > 0)
      ? this.findDoctor(id, data)
      : undefined;
    const post = (doctor)
      ? <DoctorPost
        biography={doctor.biography}
        name={doctor.name}
        profile={doctor.profile}
        onImageClick={this.onImageClick}
      />
      : undefined;

    return (
      <Box align="center">
        <WithLoading request={request}>
          {error || post }
          {doctor && doctor.images && doctor.images.length > 0 &&
            <ImageGallery images={doctor.images} />
          }
        </WithLoading>
      </Box>
    );
  }
}

function mapStateToProps(state) {
  const { request, error, data } = state.doctors;
  return {
    request, error, data,
  };
}

Doctor.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      paragraph: PropTypes.string,
    }),
  ),
  id: PropTypes.string.isRequired,
  dispatch: PropTypes.func,
  error: PropTypes.string,
  request: PropTypes.bool,
};

export default connect(mapStateToProps)(Doctor);
