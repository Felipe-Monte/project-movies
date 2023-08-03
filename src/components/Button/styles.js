import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;

  padding: 16px;

  border: none;
  background-color: ${({ theme }) => theme.COLORS.PINK};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  border-radius: 10px;
`