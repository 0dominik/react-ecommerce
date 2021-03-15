import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.nav`
  width: 75px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.1);
  padding-top: 25px;

  @media (max-width: ${({ theme }) => theme.media.small}) {
    width: 100vw;
    height: 75px;
    flex-direction: row;
    padding-top: 0;
    padding-left: 5px;
    z-index: 5;
  }
`;

export const IconLink = styled(Link)`
  font-size: 3rem;
  margin: 20px 0;
  color: ${({ theme, $isActive }) => ($isActive ? theme.colors.primary : theme.colors.lightGray)};
  transition: 0.15s;
  cursor: pointer;
  position: relative;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: ${({ theme }) => theme.media.small}) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 0;
    margin-left: 30px;
  }
`;

export const Logo = styled.img`
  width: 42px;
  height: 42px;
`;

export const IconsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;

  @media (max-width: ${({ theme }) => theme.media.small}) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 0;
  }
`;

export const CartCounter = styled.span`
  width: 18px;
  height: 18px;
  line-height: 18px;
  background-color: ${({ theme }) => theme.colors.error};
  position: absolute;
  right: -10px;
  top: -5px;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  border-radius: 50%;
`;
