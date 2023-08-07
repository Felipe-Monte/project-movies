import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;
  margin-bottom: 24px;

  padding: 32px;

  text-align: left;

  border: none;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  border-radius: 10px;

 
  > h1 {
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 24px;
    font-weight: 700;
  }

  > p {
    margin-bottom: 20px;

    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: 16px;
    font-weight: 400;
  }

  > footer {
    display: flex;
    align-items: center;
    gap: 8px;

    width: 100%;
  }
`