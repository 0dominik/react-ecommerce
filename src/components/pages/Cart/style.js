import styled from 'styled-components';

export const Container = styled.main`
  background-color: ${({ theme }) => theme.colors.gray};
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 25px;
  padding-top: 100px;
`;

export const CartList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 1400px;
`;
