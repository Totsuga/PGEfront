import React, { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";

import Input from "../../components/Form/Input";
import Button from "../../components/Button";

import api from '../../services/api';

import { Container, Link, Form, Wrapper, Label } from "./styles";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try{
      const response = await api.post('/auth/authenticate', {name: user, password})
      alert('Usuário logado');
      console.log(response);
    }
    catch(e){
      console.log(e.response.status);
      if(e.response.status === 400)
        alert('Usuário ou senha incorretos');
      else if(e.response.status === 401)
        alert('Usuário não é administrador, nao tem autorização');
      else
        alert('Erro interno do servidor');
    }
  }
  
  return (
    <Container>
      <Wrapper>
        <img src="https://intranet.pge.se.gov.br/Imagens/fachada-PGE.png" />
      </Wrapper>

      <Wrapper>
        <img src="https://intranet.pge.se.gov.br/Imagens/logo-2.png" />
        <Form onSubmit={handleSubmit}>
          <Input 
            name="user"
            label="Usuário"
            placeholder="Digite o usuário" 
            id="campoUsuário"
            type={"text"}
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />

          <Input
            label={"Senha"}
            placeholder="Digite a senha"
            id="campoSenha"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={(e) => setShowPassword(!showPassword)}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={70}
          />

          <Button>Entrar</Button>

          <Link href="/">Esqueceu sua senha ou bloqueou seu usuário?</Link>
        </Form>
      </Wrapper>
    </Container>
  );
}

export default Login;
