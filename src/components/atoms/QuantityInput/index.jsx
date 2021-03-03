import styled from 'styled-components';

export const QuantityInput = styled.input`
  width: ${({ size }) => (size === 'l' ? '65px' : '50px')};
  height: 30px;
  border-radius: 15px;
  border: none;
  background-color: ${({ theme, color }) => theme.colors[color] || theme.colors.white};
  font-size: 1.6rem;
  padding-left: 10px;
  font-weight: 700;
  margin-top: 5px;

  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.black};
  }
`;
