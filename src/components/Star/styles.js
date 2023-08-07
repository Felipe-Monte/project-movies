import styled from 'styled-components'

export const Container = styled.ul`
  display: flex;
  align-items: center;
  
  margin: 8px 0;

  line-height: 0;
  list-style: none;

  > svg {
    color: ${({ theme }) => theme.COLORS.PINK};
  }
` 