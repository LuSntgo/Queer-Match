import { Box, Button, Text } from "grommet";
import styled from "styled-components";
import SignUpBtn from "../SignUpButton";
import background from "./assets/background.png";

export function Background() {
  return (
    <Container>
      <ImageLayer />
      <Content>
        <ResumeText>
          No Queer-Match você recebe recomendações de conteúdos queer, são
          diversos filmes, séries e até mesmo livros. Não sabe o que escolher?
        </ResumeText>
        <ResumeText>
          Experimente a sorte usando o Descubra!
        </ResumeText>
        <SignUpBtn />
      </Content>
    </Container>
  );
}

export const Container = styled(Box)`
  height: 100%;
  width: 100%;
  position: relative;
`;

export const ImageLayer = styled(Box)`
  height: 100%;
  width: 100%;
  position: absolute;
  filter: brightness(70%);
  background-color: black;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-position: inherit;
  background-size: 100%;
  z-index: -2;

  animation: fadeInAnimation ease 3s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;

  div:hover {
    animation-name: fadeInAnimation;
    animation-duration: 1s;
    animation-delay: 0s;
    animation-fill-mode: forwards;
  }

  @keyframes fadeInAnimation {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const Content = styled(Box)`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const SignUpButton = styled(Button)`
  margin: 0 auto;
  width: 20%;
  height: 6%;
  background-color: #ca3d3d;
  border-radius: 30px;
  text-align: center;
  font-size: 1.4rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 100px;

  :hover {
    background-color: #640c0c;
  }
`;

export const ResumeText = styled(Text)`
  width: 34%;
  height: 8%;

  display: flex;
  justify-content: center;
  align-items: center;

  text-align: center;
  font-size: 1.8rem;
  font-weight: 700;
  color: #ffffff;

`;
