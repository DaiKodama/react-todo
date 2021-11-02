import styled from 'styled-components'

export const Button = styled.button`
  border:none;
  border-radius:4px;
  padding:4px 24px;
  margin:8px 0;
  filter: drop-shadow(2px 2px 2px rgba(0,0,0,0.4));
    &:hover {
      background:aliceblue;
    }
    &:focus {
      outline: none;
    }
`;