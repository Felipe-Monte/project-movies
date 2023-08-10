import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  > main {
    padding: 40px 126px;

    a {
      display: flex;
      align-items: center;
      gap: 8px;

      color: ${({theme}) => theme.COLORS.PINK};
    }

    h1 {
      margin-top: 24px;
    }

    h2 {
      margin-top: 40px;
      margin-bottom: 24px;

      color: ${({theme}) => theme.COLORS.GRAY_100};
      font-size: 20px;
      font-weight: 400;
    }

    > div {
      display: flex;
      align-items: center;
      gap: 40px;

      margin: 40px 0;

     div {
      margin-bottom: 0;
     }

    }

    > section {
      width: 100%;
      height: 88px;

      padding: 16px;

      display: flex;
      gap: 24px;


      background-color: ${({theme}) => theme.COLORS.BLACK};
    }

    .button-area {
      width: 100%;

      display: flex;
    }
  }
`