import styled from 'styled-components';

export const Container = styled.article`
  width: 250px;
  height: 370px;
  background-color: ${({ theme }) => theme.colors.white};
  margin: ${({ margin }) => margin || '15px'};
  padding: 25px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  position: relative;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.02);
`;

export const Name = styled.h3`
  font-size: 2.4rem;
  font-weight: normal;
  margin-top: 35px;
`;

export const Price = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
`;

export const Title = styled.span`
  text-decoration: ${({ isSold }) => isSold && 'line-through'};
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.darkGray};
  margin-top: 5px;
  margin-bottom: 10px;
`;

export const Img = styled.img`
  max-width: 200px;
  max-height: 150px;
  filter: ${({ isSold }) => isSold && 'grayscale(80%)'};
`;
