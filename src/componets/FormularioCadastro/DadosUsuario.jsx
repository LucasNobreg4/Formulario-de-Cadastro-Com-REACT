import { Button, TextField } from "@material-ui/core";
import React from "react";

function DadosUsuario({aoEnviar}) {
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
        required
      ></TextField>
      <TextField
        variant="outlined"
        margin="normal"
        fullWidth
        id="senha"
        label="senha"
        type="password"
        required
      ></TextField>
      <Button type="submit" variant="contained" color="primary">
        Entrar
      </Button>
    </form>
  );
}

export default DadosUsuario;
