import styled from 'styled-components';

export const Container = styled.header`
  background-image: url('/img/background.jpg');
  text-align: center;
  background-size: cover;
  width: 100%;
  height: 100vh;
  background-position: center bottom;
  padding-top: 100px;
`;

export const Title = styled.h2`
  font-size: 16rem;
  text-transform: uppercase;
  font-weight: 200;

  @media (max-width: ${({ theme }) => theme.media.small}) {
    font-size: 10rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 2.4rem;
  text-transform: uppercase;
  margin-bottom: 30px;
  padding: 0 10px;

  @media (max-width: ${({ theme }) => theme.media.small}) {
    font-size: 2rem;
  }
`;

export const ShadowText = styled.p`
  font-size: 18vw;
  text-transform: uppercase;
  font-weight: 700;
  position: absolute;
  top: 0px;
  left: 50%;
  z-index: 0;
  transform: translateX(-50%);
  opacity: 0.02;
  pointer-events: none;
`;
