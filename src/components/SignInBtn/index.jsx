import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { showToast } from "../Toast/ui-lib";
import * as api from "../../services/api";
import logo from "./assets/logo.png";
import Loading from "../Loading/Loading";
import useAuth from "../../hooks/useAuth";
import {
  Layer,
  Box,
  Button,
  FormField,
  MaskedInput,
  Form,
  TextInput,
  Image
} from "grommet";
import { FormBox, SignInButton } from "./style";

export default function SignInBtn() {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const { auth, login } = useAuth();

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(undefined);

  useEffect(() => {
    if (auth && auth.token) {
      navigate("/");
    }
  }, []);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    if (!formData.email || !formData.password) {
      showToast({
        type: "error",
        message: "Ops! Os campos não podem ficar em branco",
      });
    }
    try {
      const { data } = await api.signIn({ ...formData });
      setIsLoading(false);

      login(data);
      navigate("/");
    } catch (error) {
      console.log(error);
      setIsLoading(false);

      if (error.response.status === 404) {
        setFormData({
          email: "",
          password: "",
        });
        showToast({
          type: "error",
          message: "Usuário não existente, faça um cadastro, por favor.",
        });

        return;
      }
    }
  }

  return (
    <Box align="center" justify="center">
      <SignInButton label="Sign In" onClick={onOpen} />
      {open && (
        <Layer position="center" modal onClickOutside={onClose} onEsc={onClose}>
          <Box align="center" justify="center" height="120px">
            <Image width="120px" height="120px" src={logo} alt="logo"></Image>
          </Box>
          <FormBox>
            <Form onSubmit={handleSubmit}>
              <FormField
                label="Email"
                name="email"
                id="email"
                onChange={handleChange}
                disabled={isLoading}
                value={formData.email}
              >
                <MaskedInput
                  name="email"
                  mask={[
                    { regexp: /^[\w\-_.]+$/, placeholder: "example" },
                    { fixed: "@" },
                    { regexp: /^[\w]+$/, placeholder: "my" },
                    { fixed: "." },
                    { regexp: /^[\w]+$/, placeholder: "com" },
                  ]}
                />
              </FormField>
              <FormField label="Senha" name="password" htmlFor="password">
                <TextInput
                  name="password"
                  id="password"
                  type="password"
                  onChange={handleChange}
                  disabled={isLoading}
                  value={formData.password}
                />
              </FormField>
              <Box align="center" justify="center" margin={{ top: "medium" }}>
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? <Loading /> : "Sign In"}
                </Button>
              </Box>
            </Form>
          </FormBox>
        </Layer>
      )}
    </Box>
  );
}
