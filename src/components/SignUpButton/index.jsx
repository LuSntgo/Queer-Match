import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { showToast } from "../Toast/ui-lib";
import * as api from "../../services/api";
import logo from "./assets/logo.png";
import Loading from "../Loading/Loading";
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
import { FormBox, SignUpButton } from "./style";

export default function SignUpBtn() {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    image: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(undefined);
  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
    setIsLoading(true);

    if (formData.email === "" || formData.password === "") {
      showToast({
        type: "error",
        message: "Ops! Os campos não podem ficar em branco",
      });
    }
    const { email, password, confirmPassword } = formData;

    if (password !== confirmPassword) {
      showToast({
        type: "error",
        message: "As senhas precisam ser iguais, digite novamente.",
      });
    }
    try {
      await api.createUser({ email, password });
      showToast({
        type: "success",
        message: "Cadastrado efetuado com sucesso!",
      });
      setIsLoading(false);
      navigate("/");
    } catch (error) {
      console.log(error);
      setIsLoading(false);

      if (error.response.status === 409) {
        setFormData({
          email: "",
          password: "",
          confirmPassword: "",
        });
        showToast({
          type: "error",
          message: "Email já existente, faça um cadastro, por favor.",
        });

        return;
      }
    }
  }

  return (
    <Box align="center" justify="center">
      <SignUpButton label="Cadastre-se agora" onClick={onOpen} />
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
              <FormField label="Avatar" name="image" htmlFor="image">
                <TextInput
                  name="image"
                  id="image"
                  type="url"
                  onChange={handleChange}
                  disabled={isLoading}
                  value={formData.image}
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
              <FormField
                label="Repita sua senha"
                name="ConfirmPassword"
                htmlFor="ConfirmPassword"
              >
                <TextInput
                  name="confirmPassword"
                  id="confirmPassword"
                  type="password"
                  onChange={handleChange}
                  disabled={isLoading}
                  value={formData.confirmPassword}
                />
              </FormField>
              <Box align="center" justify="center" margin={{ top: "medium" }}>
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? <Loading /> : "Cadastre-se"}
                </Button>
              </Box>
            </Form>
          </FormBox>
        </Layer>
      )}
    </Box>
  );
}
