import styled from 'styled-components';

export const Button = styled.button`
  min-width: ${({ size }) => (size === 's' ? '60px' : '175px')};
  height: ${({ size }) => (size === 's' ? '30px' : '40px')};
  background-color: ${({ theme, disabled }) => (disabled ? theme.colors.darkGray : theme.colors.primary)};
  text-transform: uppercase;
  border-radius: 30px;
  border: 0;
  padding: 0 15px;
  font-size: 1.4rem;
  cursor: ${({ disabled }) => !disabled && 'pointer'};
  transition: 0.1s;
  font-weight: 400;
  letter-spacing: 0.5px;
  color: ${({ theme }) => theme.colors.white};
  margin-left: ${({ ml }) => `${ml}px`}};
  margin-top: ${({ mt }) => `${mt}px`}};

  &:hover,
  &:focus {
    background-color: ${({ theme, disabled }) => !disabled && theme.colors.darkPrimary};
  }
`;
