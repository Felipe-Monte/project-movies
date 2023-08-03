import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 8px;

  width: 100%;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  border-radius: 10px;

  > input {
    width: 100%;
    height: 56px;

    padding: 16px;

    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;
    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }

  > svg {
    margin-left: 16px;
  }
`