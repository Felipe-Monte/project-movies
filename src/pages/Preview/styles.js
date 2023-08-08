import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  > main {
    padding: 40px 126px;

    a {
      display: flex;
      align-items: center;
      gap: 8px;

      color: ${({ theme }) => theme.COLORS.PINK};
    }   

    p {
      color: ${({ theme }) => theme.COLORS.WHITE};
      text-align: justify;
      font-size: 16px;
      font-weight: 400;
      line-height: 25px;
    }

    span {
      display: inline-flex;
      align-items: center;

      margin-right: 8px;
      svg {
        margin-right: 8px;
        color: ${({ theme }) => theme.COLORS.PINK};
      }
    }
  }

  .section-tags {
    display: flex;
    gap: 8px;

    width: 100%;
    margin: 40px 0;

  }
  

  .header-preview {
    display: flex;
    align-items: center;

    margin: 24px 0px;
   
    h1 {
      margin-right: 19px;

      color: ${({ theme }) => theme.COLORS.WHITE};
      font-size: 36px;
      font-weight: 500;
    }

    svg {
      margin-right: 10px;
      width: 20px;
      height: 20px;
    }
  }
`   