import styled from 'styled-components';

export const Input = styled.input`
  height: 45px;
  width: 250px;
  padding: 0 15px;
  border-radius: 25px;
  font-size: 1.6rem;
  border: 1px solid black;
  outline: none;
  margin-bottom: 15px;
  margin-top: 5px;

  &:focus {
    background-color: ${({ theme }) => theme.colors.gray};
    border: 2px solid ${({ theme }) => theme.colors.primary};
  }
`;
