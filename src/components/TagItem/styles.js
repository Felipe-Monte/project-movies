import styled from 'styled-components'

export const Container = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;

  padding-right: 16px;

  background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.BACKGROUND_900};
  color: ${({ theme }) => theme.COLORS.WHITE};
  border: ${({ theme, isNew }) => isNew ? `2px dashed ${theme.COLORS.GRAY_300}` : "none"};

  border-radius: 10px;

> input {
    height: 50px; 
    width: 110px;
    padding: 12px;
    border: none;

    text-align: center;

    background-color: transparent;
    color: ${({ theme }) => theme.COLORS.WHITE};

    border-radius: 10px;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }

  > button {
    border: none;
    background: none;
  }

  svg {
    background-color: white;
  }
`