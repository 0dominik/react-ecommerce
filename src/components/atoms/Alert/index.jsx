import styled from 'styled-components';

export const Alert = styled.p`
  ${({ type }) => {
    if (type === 'info') {
      return `background-color: #fbff00;
              color: #000000;`;
    } else if (type === 'error') {
      return `background-color: #c71313;
              color: #ffffff;`;
    } else if (type === 'success') {
      return `background-color: #62d614;
              color: #ffffff;`;
    } else {
      return `background-color: transparent;
              color: #000000;`;
    }
  }};
  margin: 20px 0;
  padding: 5px 10px;
  text-align: center;
`;
