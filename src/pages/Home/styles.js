import styled from 'styled-components'

export const Container = styled.div`

`

export const Content = styled.div`
  width: 100%;


  > div {
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 750px;

    padding: 50px 123px;

    > h2 {
      color: ${({theme}) => theme.COLORS.WHITE};
      font-size: 32px;
      font-weight: 400;
      white-space: nowrap;
    }
  }
`