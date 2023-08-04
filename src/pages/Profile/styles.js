import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  > header {
    grid-area: header;

    width: 100%;
    height: 144px;

    padding: 64px 168px;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

    > div {
      display: flex;
      align-items: center;
      gap: 8px;

      a {
        color: ${({ theme }) => theme.COLORS.PINK};
      }

      svg {
        width: 16px;
        height: 16px;
        color: ${({ theme }) => theme.COLORS.PINK};
      }
    }
  }
`

export const Form = styled.form`
  width: 380px;
  margin: -150px auto;

  > div:nth-child(3) {
    margin-bottom: 24px;
  }

  > div:nth-child(5) {
    margin-bottom: 24px;
  }
`

export const Avatar = styled.div`
  position: relative;

  width: 186px;
  height: 186px;

  margin: 64px auto;

  border-radius: 50%;

  > img {
    width: 100%;
    border-radius: 50%;
  }

  > label {
    position: absolute;
    right: 7px;
    bottom: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 48px;
    height: 48px;

    background-color: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 50%;

    cursor: pointer;

    svg {
      width: 20px;
      height: 20px;
      color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    }

    input {
      display: none;
    }
  }
`