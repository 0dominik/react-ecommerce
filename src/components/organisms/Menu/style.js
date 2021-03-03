import styled from 'styled-components';

export const Nav = styled.nav`
  position: fixed;
  width: 250px;
  height: 100vh;
  transition: 0.3s;
  background-color: ${({ theme }) => theme.colors.white};
  top: 0;
  right: ${({ isOpen }) => (isOpen ? '0' : '-275px')};
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 15px 2px rgba(0, 0, 0, 0.1);
  z-index: 5;
`;

export const ButtonsContainer = styled.div`
  position: absolute;
  bottom: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
