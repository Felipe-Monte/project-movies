import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;
  height: 116px;

  padding: 24px 130px;
  
  grid-area: header;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 80px;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.GRAY_300};

  > div:nth-child(2) {
    margin-bottom: 0;
  }

  > h1 {
    color: ${({ theme }) => theme.COLORS.PINK};
    font-size: 24px;
    font-weight: 700;
  }
`

export const Logout = styled.div`
  display: flex;
  gap: 9px;

  > div {
    display: flex;
    justify-content: center;
    flex-direction: column;

    line-height: 24px;

    span {
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
      text-align: right;
    }

    strong {
      font-size: 18px;
      color: ${({ theme }) => theme.COLORS.WHITE};
      white-space: nowrap;
    }
  }

  > img {
    width: 64px;
    height: 64px;

    border-radius: 50%;
  }
`