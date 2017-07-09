import React from 'react';
import DocumentDownloadIcon from 'grommet/components/icons/base/DocumentDownload';
import Anchor from './styles';

export const DownloadLink = props =>
  <Anchor
    reverse
    icon={<DocumentDownloadIcon />}
    {...props}
  />;

export default DownloadLink;
