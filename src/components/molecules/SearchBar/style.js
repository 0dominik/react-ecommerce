import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
  margin-bottom: 50px;
`;

export const StyledInput = styled.input`
  width: min(800px, 85vw);
  height: 75px;
  border: 0;
  outline: 0;
  border-bottom: 1px solid gray;
  text-transform: uppercase;
  font-size: 4rem;
  letter-spacing: 0.5px;
  position: relative;
  transition: 0.3s;
  padding-left: 15px;
  padding-right: 15px;
  background-color: ${({ theme }) => theme.colors.gray};

  &:focus {
    background-color: ${({ theme }) => theme.colors.white};

    & + label {
      transform: translateY(60px);
      opacity: ${({ isLabelVisible }) => (isLabelVisible ? '0' : '1')};
    }
  }

  ::-webkit-search-cancel-button {
    -webkit-appearance: none;
  }
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.colors.darkGray};
  margin-top: 15px;
  position: absolute;
  font-size: 2.4rem;
  transition: 0.3s;
  opacity: ${({ isLabelVisible }) => (isLabelVisible ? '1' : '0')};
  pointer-events: none;
  max-width: 90vw;
  text-align: center;
`;

export const ClearButton = styled.button`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(calc(-50% - 2px));
  height: 100%;
  width: 50px;
  font-size: 3rem;
  font-weight: 700;
  border: 0;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.darkGray};
  cursor: pointer;
  transition: 0.3s;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.black};
  }
`;

export const SearchButton = styled(ClearButton)`
  right: 65px;
  transform: translateY(calc(-50% + 2px));
`;
