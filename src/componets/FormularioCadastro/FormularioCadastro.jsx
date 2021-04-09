import React, { useState } from "react";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";
import DadosEntrega from "./DadosEntrega";
import { Typography } from "@material-ui/core";

function FormularioCadastro({ aoEnviar, aoValidar }) {
  const [etapaAtual, setEtapaAtual] = useState(0)
  //↓↓↓↓↓↓↓A Função abaixo define a renderização condicional dos elementos na tela↓↓↓↓↓↓↓↓
  function formularioAtual(etapa) {
    switch (etapa) {
      case 0:
        return <DadosUsuario />;
      case 1:
        return <DadosPessoais aoEnviar={aoEnviar} aoValidar={aoValidar} />;
      case 2:
        return <DadosEntrega />;
      default:
        <Typography>ERRO ao selecionar Formulario</Typography>;
    }
  }
  return (
    <>
      {formularioAtual(etapaAtual)}

    </>
  );
}



export default FormularioCadastro;
