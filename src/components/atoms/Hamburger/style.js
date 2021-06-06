import styled from 'styled-components';

export const StyledHamburger = styled.button`
  width: 60px;
  height: 60px;
  position: fixed;
  background-color: transparent;
  border-radius: 50%;
  border: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  top: 10px;
  right: 15px;
  box-shadow: 0px 3px 10px -2px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.white};
  z-index: 10;

  @media (max-width: ${({ theme }) => theme.media.small}) {
    box-shadow: none;
    top: 0;
    right: 5px;
    height: 75px;
    border-radius: 0;
  }

  &:after,
  &:before,
  .bar {
    content: '';
    width: 20px;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 25%;
    transition: 0.15s;
  }

  .bar {
    opacity: ${({ isOpen }) => isOpen && 0};
  }

  &:after {
    margin-top: 3px;
    transform: ${({ isOpen }) => (isOpen ? 'translateY(-6px) rotate(45deg)  ' : true)};
  }

  &:before {
    margin-bottom: 3px;
    transform: ${({ isOpen }) => (isOpen ? 'translateY(6px)  rotate(-45deg)' : true)};
  }
`;
