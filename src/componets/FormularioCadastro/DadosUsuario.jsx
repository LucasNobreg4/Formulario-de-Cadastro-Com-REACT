import { Button, TextField } from "@material-ui/core";
import React from "react";

function DadosUsuario(aoEnviar) {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        aoEnviar();
      }}
    >
      <TextField
        variant="outlined"
        margin="normal"
        fullWidth
        id="email"
        label="email"
        type="email"
      ></TextField>
      <TextField
        variant="outlined"
        margin="normal"
        fullWidth
        id="senha"
        label="senha"
        type="password"
      ></TextField>
      <Button type="submit" variant="contained" color="primary">
        Enviar
      </Button>
    </form>
  );
}

export default DadosUsuario;
