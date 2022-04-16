import { Link } from 'react-scroll'
import styled from 'styled-components'

export const Button = styled(Link)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? '#5B8731' : '#010606')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
  color: ${({ dark }) => (dark ? '#fff' : '#010606')};
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  &:hover {
    background: ${({ primary }) => (primary ? '#fff' : '#5B8731')};
    color: ${({ dark }) => (dark ? '#010606' : '#fff')};
  }
`