import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: ${({ theme }) => theme.media.small}) {
    padding-top: 100px;
  }
`;

export const Img = styled.img`
  width: min(300px, 90vw);
  margin-right: 100px;
  padding-bottom: 25px;

  @media (max-width: ${({ theme }) => theme.media.medium}) {
    margin-right: 0;
    margin: 25px 0;
  }
`;

export const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.gray};
  align-items: center;
`;
