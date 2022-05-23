import { Box, Button } from "grommet";
import styled from "styled-components";

export const FormBox = styled(Box)`
  height: 300px;
  width: 300px;

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  padding: 15px;
  font-size: 1.2rem;
`;

export const SignInButton = styled(Button)`
  margin: 0 auto;
  width: 120px;
  height: 35px;
  background-color: #ca3d3d;
  border-radius: 30px;
  text-align: center;
  font-size: 1.2rem;
  font-weight: 700;
  color: #fff;

  :hover {
    background-color: #640c0c;
  }
`;
