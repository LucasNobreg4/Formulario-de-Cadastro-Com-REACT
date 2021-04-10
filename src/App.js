import React from "react";
import "./App.css";
import FormularioCadastro from "./componets/FormularioCadastro/FormularioCadastro";
import { Container, Typography } from "@material-ui/core";
import "fontsource-roboto";
function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" component="h1" align="center">
        Formulário de cadastro
      </Typography>
      <FormularioCadastro aoEnviar={aoEnviarFormulario} aoValidar={validarCPF} />
    </Container>
  );
}

function aoEnviarFormulario(dados) {
  console.log(dados);
}

function validarCPF(cpf) {
  if (cpf.lenght !==11) {
    return {valido:false, texto:"CPF deve ter 11 digitos"}
  }else{
    return {valido:true, texto:""}
  }
}
export default App;
