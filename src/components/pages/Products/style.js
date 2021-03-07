import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.gray};
  min-height: 100vh;
  padding-top: 50px;
  padding-bottom: 25px;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.media.small}) {
    padding-top: 100px;
  }
`;

export const PageContainer = styled.div`
  display: flex;
`;

export const PageNumber = styled.p`
  font-size: 2.4rem;
  margin: 0 10px;
`;
