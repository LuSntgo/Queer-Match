import { Container, RainbowLeft, RainbowRight, Content } from "./style";

import { NavBar } from "../../components/NavBar";
import { FooterBar } from "../../components/Footer";
import { Background } from "../../components/Background";

export function HomePage() {
  return (
    <Container>
      <Content>
        <NavBar/>
        <Background/>
        <RainbowLeft/>
        <RainbowRight/>
        <FooterBar/>
      </Content>
    </Container>
  );
}
