import styled from 'styled-components';

const ImageThumb = styled.div`
  height: 75px;
  width: 75px;
  margin-right: 12px;
  margin-bottom: 12px;
  box-sizing: border-box;
  background: url("${props => props.path}") no-repeat;
  border: ${props => props.active ? '2px solid #ffdb44' : 'none'}
  background-size: cover;
`;

export default ImageThumb;
