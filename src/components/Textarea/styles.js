import styled from 'styled-components'

export const Container = styled.textarea`
  width: 100%;
  height: 270px;

  padding: 16px;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  color: ${({ theme }) => theme.COLORS.WHITE};

  border: none;
  border-radius: 10px;
  resize: none;

  &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
  }
`