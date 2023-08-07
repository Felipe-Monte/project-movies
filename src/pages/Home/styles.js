import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  
  > main {
    padding: 0 123px ;
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 800px;

    padding: 50px 123px;

    > h2 {
      color: ${({ theme }) => theme.COLORS.WHITE};
      font-size: 32px;
      font-weight: 400;
      white-space: nowrap;
    }

    > button {
      width: 207px;
    }
  }
`

export const Content = styled.div`
  width: 100%;

  /* padding: 0 123px; */
  height: 63vh;
  overflow-y: auto;


  &::-webkit-scrollbar {
    width:10px;
    height: 10px;
  }
 

  &::-webkit-scrollbar-track {
    background:#333;
  } 
 

  &::-webkit-scrollbar-thumb {
    background: #2e9dd8;
  }
`