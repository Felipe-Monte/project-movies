import styled from 'styled-components'

export const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  width: 100%;

  padding: 16px;

  border: none;
  background-color: ${({ theme }) => theme.COLORS.PINK};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  border-radius: 10px;

  > svg {
    width: 16px;
    height: 16px;
  }
`