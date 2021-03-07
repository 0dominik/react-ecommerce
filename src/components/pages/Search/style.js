import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.gray};
  min-height: 100vh;
  padding-top: 50px;

  @media (max-width: ${({ theme }) => theme.media.small}) {
    padding-top: 100px;
  }
`;

export const Results = styled.section`
  max-width: 850px;
  width: 95vw;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 50px;
  justify-content: center;
`;
