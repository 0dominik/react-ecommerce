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
