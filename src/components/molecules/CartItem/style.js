import styled from 'styled-components';

export const Container = styled.article`
  max-width: 800px;
  width: min(80vw, 585px);
  background-color: ${({ theme }) => theme.colors.white};
  margin: 15px;
  padding: 25px 30px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.media.small}) {
    flex-direction: column;
    margin: 0;
    margin-bottom: 15px;
    width: 90vw;
    padding: 25px 0;
    text-align: center;
  }
`;

export const Name = styled.h3`
  font-size: 2.4rem;
  font-weight: normal;
  margin-bottom: 20px;
`;

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: -5px;
  text-transform: uppercase;
  margin-right: 20px;
`;

export const Img = styled.img`
  max-width: 125px;
  max-height: 150px;
  margin-right: 50px;

  @media (max-width: ${({ theme }) => theme.media.small}) {
    margin: 0;
  }
`;

export const ButttonsContainer = styled.div`
  padding-top: 20px;
`;

export const SubContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-wrap: wrap;
`;
