import styled from 'styled-components';

export const Form = styled.form`
  background-color: #fff;
  align-items: center;
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 75px;
  max-width: 90vw;

  @media (max-width: ${({ theme }) => theme.media.small}) {
    padding: 30px 50px;
  }

  label {
    display: flex;
    flex-direction: column;
    text-align: center;
    text-transform: uppercase;
  }
`;

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
