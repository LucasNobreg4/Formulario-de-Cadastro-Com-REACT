import React, { useState } from "react";
import Obrigado from "./Obrigado";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";
import DadosEntrega from "./DadosEntrega";


function FormularioCadastro({ aoEnviar, aoValidar }) {
  const [etapaAtual, setEtapaAtual] = useState(0);
  const formularios = [
    <DadosUsuario aoEnviar={proximo} />,
    <DadosPessoais aoEnviar={proximo} aoValidar={aoValidar} />,
    <DadosEntrega aoEnviar={proximo} />,
    <Obrigado />,
  ];
  /* ↓↓↓↓↓essa função abaixo controla a renderização condicional adicionando +1 no setState da EtapaAtual↓↓↓↓↓ */
  function proximo() {
    setEtapaAtual(etapaAtual + 1);
  }
    return <>{formularios[etapaAtual]}</>;
}

export default FormularioCadastro;
