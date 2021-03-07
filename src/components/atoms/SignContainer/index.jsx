import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.gray};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (max-width: ${({ theme }) => theme.media.small}) {
    padding-top: 100px;
    padding-bottom: 10px;
    justify-content: auto;
  }
`;

export const InputsContainer = styled.div`
  margin-bottom: 25px;
  margin-top: 10px;
`;

export const Info = styled.p`
  margin-top: 25px;
`;
