import { Box } from "grommet";
import styled from "styled-components";
import rainbow from "./assets/rainbow.svg";

export const Container = styled(Box)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: -2;
`;

export const Content = styled(Box)`
  height: 100%;
  width: 100%;
  position: relative;
`;

export const RainbowLeft = styled(Box)`
  position: absolute;
  height: 100%;
  width: 100%;
  background-image: url(${rainbow});
  background-repeat: no-repeat;
  background-size: 35%;
  background-position: -18% -50%;
  z-index: -1;

`;
export const RainbowRight = styled(Box)`
  height: 100%;
  width: 100%;
  position: absolute;
  background-image: url(${rainbow});
  background-repeat: no-repeat;
  background-size: 40%;
  background-position: 140% 160%;
  z-index: -1;
`;

