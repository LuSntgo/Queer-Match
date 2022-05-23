import { Box, Button } from "grommet";
// import { Link } from "react-router-dom";
import styled from "styled-components";

export const FormBox = styled(Box)`
  height: 500px;
  width: 400px;

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  padding: 15px;
  font-size: 1.2rem;
`;

export const SignUpButton = styled(Button)`
  margin: 0 auto;
  width: 300px;
  height: 45px;
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
