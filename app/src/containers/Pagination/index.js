import React, { Component, PropTypes } from 'react';
import Anchor from 'grommet/components/Anchor';
import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';
import Next from 'grommet/components/icons/base/Next';
import Previous from 'grommet/components/icons/base/Previous';

export class Pagination extends Component {
  constructor(props) {
    super(props);

    this.handlePageClick = this.handlePageClick.bind(this);
  }
  getLabels(currentPage, pageViewCount, pageCount) {
    const pageLinks = [];
    const startingCount = (currentPage > pageViewCount)
     ? currentPage - Math.floor(pageViewCount / 2)
     : 1;
    const pageMax = (currentPage > pageViewCount)
      ? (startingCount + pageViewCount) - 1
      : pageViewCount;
    for (let label = startingCount; label <= pageMax; label++) { // eslint-disable-line no-plusplus
      if (label <= pageCount) {
        pageLinks.push({
          label,
          disabled: currentPage === label,
        });
      }
    }

    return pageLinks;
  }
  handlePageClick(page) {
    const onClick = this.props;
    if (onClick) this.props.onClick(page);
  }
  render() {
    const { currentPage, pageViewCount, pageCount } = this.props;
    const links = this.getLabels(currentPage, pageViewCount, pageCount);
    const buttons = links.map(link =>
      <Anchor
        {...link}
        key={`page-button-${link.label}`}
        onClick={this.handlePageClick.bind(this, link.label)}
      />,
    );
    return (
      <Box
        pad={{
          horizontal: 'medium',
          vertical: 'medium',
          between: 'medium',
        }}
        justify="center"
        align="center"
        direction="row"
        responsive={false}
      >
        { currentPage > 1 &&
          <Button
            plain
            icon={<Previous />}
            onClick={this.handlePageClick.bind(this, currentPage - 1)}
          />
        }
        { currentPage > Math.floor(pageViewCount / 2) + 1 &&
          <Box
            direction="row"
            responsive={false}
          >
            <Anchor
              label={1}
              onClick={this.handlePageClick.bind(this, 1)}
            />
            &nbsp;...
          </Box>
        }
        {buttons}
        { currentPage < pageCount - Math.floor(pageViewCount / 2) &&
          <Box
            direction="row"
            responsive={false}
          >
            ...&nbsp;
            <Anchor
              label={pageCount}
              onClick={this.handlePageClick.bind(this, pageCount)}
            />
          </Box>
        }
        { currentPage !== pageCount &&
          <Button
            plain
            icon={<Next />}
            onClick={this.handlePageClick.bind(this, currentPage + 1)}
          />
        }
      </Box>
    );
  }
}

Pagination.propTypes = {
  currentPage: PropTypes.number,
  onClick: PropTypes.func.isRequired,
  pageCount: PropTypes.number.isRequired,
  pageViewCount: PropTypes.number,
};

Pagination.defaultProps = {
  currentPage: 1,
  pageViewCount: 7,
};

export default Pagination;
