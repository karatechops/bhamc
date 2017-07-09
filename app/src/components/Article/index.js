import React, { PropTypes } from 'react';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import StyledArticle from './styles';

const Article = ({ __html, title }) =>
  <Box full="horizontal">
    { title &&
      <Heading tag="h3" margin="none">{title}</Heading>
    }
    <StyledArticle dangerouslySetInnerHTML={{ __html }} />
  </Box>;

Article.propTypes = {
  __html: PropTypes.string,
  title: PropTypes.string,
};

export default Article;
