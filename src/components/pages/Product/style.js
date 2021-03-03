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

export const BoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.gray};
  align-items: center;
`;

export const Board = styled.div`
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

export const Price = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 2.2rem;
  font-weight: 700;
  margin-top: 5px;
`;

export const AddContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Label = styled.label`
  display: flex;
  text-transform: uppercase;
  font-size: 1.2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.black};
  flex-direction: column;
  margin-right: 20px;
  margin-bottom: 20px;
`;

export const Recommended = styled.div`
  min-height: 375px;
  background-color: #fff;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  position: relative;
  padding-left: 50px;

  @media (max-width: ${({ theme }) => theme.media.medium}) {
    padding: 20px;
  }
`;

export const RecommendedHeading = styled.p`
  left: -40px;
  font-size: 2.2rem;
  transform: rotate(-90deg);
  position: absolute;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.darkGray};
  z-index: 5;

  @media (max-width: ${({ theme }) => theme.media.medium}) {
    transform: translateX(-50%);
    left: 50%;
    top: 20px;
  }
`;
