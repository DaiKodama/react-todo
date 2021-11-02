import styled from 'styled-components';

export const Header = (props) => {
  return (
    <AppBar>
        <Title>CODE TEACHER</Title>
    </AppBar>
  );
}

const AppBar = styled.div`
  height:64px;
  width:100%;
  background:white;
  display: flex;
  align-items: center;
  filter: drop-shadow(4px 4px 4px rgba(0,0,0,0.4));
`;

const Title = styled.h1`
  margin:0 16px;
  font-size:24px;
`;
