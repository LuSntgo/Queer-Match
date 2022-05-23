import { Header, Anchor, Box, Avatar, Menu } from "grommet";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import SignInBtn from "../SignInBtn";

export function NavBar() {
  const navigate = useNavigate();

  return (
    <Container>
      <RedLayer />

      <Content>
        <Box width="180px" />
        <Box
          flex
          gap="140px"
          direction="row"
          alignSelf="center"
          justify="center"
        >
          <NavText onClick={() => navigate("/descubra")}>DESCUBRA </NavText>
          <NavText onClick={() => navigate("/filmes")}>FILMES </NavText>
          <NavText onClick={() => navigate("/filmes")}>SÉRIES </NavText>
          <NavText onClick={() => navigate("/filmes")}>LIVROS </NavText>
        </Box>
        <Box alignSelf="center" width="140px" justify="end">
          <SignInBtn />
          {/* <Menu
            label={
              <Avatar src="https://i.pinimg.com/236x/12/77/8a/12778a0374d2674879bb09c6f0b37c58.jpg" />
            }
            dropBackground={{ color: "#ca3d3d" }}
            items={[
              { label: "Home", onClick: () => {} },
              { label: "Logout", onClick: () => {} },
            ]}/> */}
        </Box>
      </Content>
    </Container>
  );
}

const Container = styled(Header)`
  position: relative;
  height: 60px;
  width: 100%;
`;

const RedLayer = styled(Header)`
  position: absolute;
  background-color: #ca3d3d;
  height: 60px;
  width: 100%;

  z-index: -2;
`;

const Content = styled(Box)`
  flex-direction: row;
  position: absolute;
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const NavText = styled(Anchor)`
  color: #fff;
  font-weight: 700;
  font-size: 1.2rem;

  :hover {
    color: #640c0c;
  }
`;
