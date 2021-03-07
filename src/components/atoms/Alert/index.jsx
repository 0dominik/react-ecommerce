import styled from 'styled-components';

export const Alert = styled.p`
  ${({ type, theme }) => {
    if (type === 'info') {
      return `background-color: ${theme.colors.info};
              color: #000000;`;
    } else if (type === 'error') {
      return `background-color: ${theme.colors.error};
              color: #ffffff;`;
    } else if (type === 'success') {
      return `background-color: ${theme.colors.success};
              color: #000000;`;
    } else {
      return `background-color: transparent;
              color: #000000;`;
    }
  }};
  margin: 20px 0;
  padding: 5px 10px;
  text-align: center;
`;
