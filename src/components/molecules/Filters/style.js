import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  margin-bottom: 25px;
  margin-top: 25px;
`;

export const Label = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 50px;
`;

export const SortContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RadioInput = styled.input`
  margin-right: 5px;
  margin-top: 10px;
`;

export const PriceInput = styled.input`
  width: 65px;
  height: 30px;
  border-radius: 15px;
  border: none;
  background-color: ${({ theme }) => theme.colors.white};
  font-size: 1.6rem;
  padding-left: 10px;
  font-weight: 700;
  margin-top: 5px;

  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.black};
  }
`;
