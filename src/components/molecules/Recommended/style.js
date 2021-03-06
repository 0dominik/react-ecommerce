import styled from 'styled-components';

export const Container = styled.div`
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

export const Heading = styled.p`
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
