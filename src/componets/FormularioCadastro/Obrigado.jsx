import React from "react";
import { Container, Typography } from "@material-ui/core";

function Obrigado({ aoEnviar }) {
  return (
    <Container component="article">
      <br />
      <br />
      <Typography align="center" variant="h5" component="h1">
        Muito Obrigado pelo seu Pedido
      </Typography>
      <Typography align="center" variant="body1" component="h1">
        Agredecemos a sua preferencia, seu pedido será enviado 
        {" "} <br/>
        <strong>EM ALGUNS MINUTOS</strong>
      </Typography>
    </Container>
  );
}

export default Obrigado;
