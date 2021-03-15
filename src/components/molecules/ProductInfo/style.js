import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 800px;
  min-height: 400px;
  padding: 50px;

  @media (max-width: ${({ theme }) => theme.media.small}) {
    width: 90vw;
    padding: 30px 0;
  }
`;

export const Name = styled.h3`
  text-transform: uppercase;
  font-weight: 500;
  font-size: 3.4rem;

  .hl {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: ${({ isSold }) => isSold && 'line-through'};
  }
`;

export const Description = styled.p`
  margin: 40px 0;
  line-height: 150%;
  letter-spacing: 0.5px;
`;

export const SubContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const PriceContainer = styled.div`
  text-transform: uppercase;
  font-size: 1.3rem;
  font-weight: 700;
  text-align: center;
`;

export const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
`;
