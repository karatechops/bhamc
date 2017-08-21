import React, { Component } from 'react';
import Box from 'grommet/components/Box';
import Paragraph from 'grommet/components/Paragraph';
import { SectionHeader } from 'components';

export default class AboutUsPage extends Component { // eslint-disable-line
  render() {
    return (
      <Box
        justify="center"
        align="center"
        alignSelf="center"
      >
        <Box direction="row" pad={{ between: 'medium' }}>
          <Box align="center" size={{ width: 'medium' }}>
            <SectionHeader title="Hospital Hours" />
            <Box align="center" pad="medium">
              <Paragraph margin="small">
                Monday - Friday: 7:30 am - 7:30 pm
              </Paragraph>
              <Paragraph margin="small">
                Saturday: 7:30 am - 1:30 pm
              </Paragraph>
              <Paragraph margin="small">
                Appointments Preferred
              </Paragraph>
            </Box>
          </Box>
          <Box align="center" size={{ width: 'medium' }}>
            <SectionHeader title="Contact" />
            <Box align="center" pad="medium">
              <Paragraph margin="small">
                1221 Belle Haven Rd, Alexandria, VA 22307
              </Paragraph>
              <Paragraph margin="small">
                (703) 721 - 0088
              </Paragraph>
              <Paragraph margin="small">
                <a href="mailto:info@bhamc.com">info@bhamc.com</a>
              </Paragraph>
            </Box>
          </Box>
        </Box>
        <Box align="center" size={{ width: 'xlarge' }}>
          <SectionHeader title="Contact" />
          <Box align="center" pad="medium" full="horizontal">
            <iframe
              width="100%"
              height="400"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              style={{ background: '#eee' }}
              src="http://maps.google.com/maps?q=1221+Belle+Haven+Road+Alexandria,+VA+22307&amp;oe=utf-8&amp;client=firefox-a&amp;ie=UTF8&amp;hq=&amp;hnear=1221+Belle+Haven+Rd,+Alexandria,+Virginia+22307&amp;gl=us&amp;ll=38.785937,-77.057076&amp;spn=0.047636,0.103683&amp;z=14&amp;output=embed&amp;iwloc=near&amp;addr&amp;"
            />
          </Box>
        </Box>
        <Box pad="small" />
      </Box>
    );
  }
}