import styled from 'styled-components'

export const ButtonContainer = styled.button`
  background: #facc15;

  
  border: 0;
  border-radius: 4px;

  color: ${({ theme }) => theme.contrast};
  font-weight: 700;
  font-size: 19px;

  transition: all 0.3s;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 0 10px ${({ theme }) => theme.background};
  }
  margin: 0 auto;
`
