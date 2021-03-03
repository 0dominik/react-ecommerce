import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  max-width: 800px;
  width: min(80vw, 585px);
  background-color: ${({ theme }) => theme.colors.white};
  margin: 15px;
  padding: 25px 40px;
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
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: -5px;
  text-transform: uppercase;
`;

export const Price = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.8rem;
  font-weight: 700;
  margin-top: 10px;
  height: 30px;
`;

export const Img = styled.img`
  max-width: 125px;
  max-height: 150px;
  margin-right: 50px;

  @media (max-width: ${({ theme }) => theme.media.small}) {
    margin: 0;
  }
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-transform: uppercase;
  font-size: 1.4rem;
  font-weight: 700;
  margin-left: 30px;
  margin-right: 10px;
`;

export const QuantityContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-wrap: wrap;
`;
