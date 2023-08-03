import styled from 'styled-components'

import background from '../../assets/background.png'

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`
export const Form = styled.form`
  padding: 0 136px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;

  > h1 {
    color: ${({ theme }) => theme.COLORS.PINK};
    
    font-size: 48px;
    font-weight: 700;
  }

  > h2 {
    margin: 48px 0;

    color: ${({ theme }) => theme.COLORS.WHITE};
  
    font-size: 24px;
    font-weight: 500;
  }

  > p {
    color: ${({ theme }) => theme.COLORS.WHITE};

    font-size: 14px;
    font-weight: 400;
  }

  .container-link {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 42px;

    svg {
      color: ${({ theme }) => theme.COLORS.PINK};
      font-size: 18px;
    }
  
    a {
      text-align: center;
      color: ${({ theme }) => theme.COLORS.PINK};
    }
  } 
`

export const Background = styled.div`
  flex: 1;
  background: url(${background}) no-repeat center center;
  background-size: cover;
`
