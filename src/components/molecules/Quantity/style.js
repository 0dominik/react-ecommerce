import styled from 'styled-components';

export const QuantityContainer = styled.div`
  display: flex;
  margin-top: 5px;
`;

export const Label = styled.p`
  text-transform: uppercase;
  font-size: 1.3rem;
  font-weight: 700;
  text-align: center;
`;

export const QuantityValue = styled.p`
  border-radius: 15px;
  width: 30px;
  height: 30px;
  border: none;
  font-size: 1.8rem;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const QuantityButton = styled.button`
  background-color: transparent;
  width: 30px;
  height: 30px;
  font-size: 2.4rem;
  border: 2px solid ${({ theme }) => theme.colors.black};
  border-radius: 50%;
  line-height: 25px;
  cursor: pointer;
  transition: 0.15s;
  margin-left: 5px;
  margin-right: 5px;

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
  }
`;
