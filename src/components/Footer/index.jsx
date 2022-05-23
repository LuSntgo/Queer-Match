import { Footer } from "grommet";
import styled from "styled-components";

export function FooterBar() {
  return (
    <BottomBar>
    </BottomBar>
  );
}

const BottomBar = styled(Footer)`
  background-color: #ca3d3d;
  position: absolute;
  bottom: 0;
  height: 35px;
  width: 100%;
  z-index: -2;
`;

