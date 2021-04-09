import { Button, TextField } from "@material-ui/core";

import React from "react";

function DadosEntrega() {
  return (
    <>
      <form>
        <TextField
          id="cep"
          label="CEP"
          type="number"
          margin="normal"
          variant="outlined"
          fullWidth
        ></TextField>
        <TextField
          id="endeco"
          label="Endereço"
          type="text"
          variant="outlined"
          margin="normal"
          fullWidth
        ></TextField>
        <TextField
          id="numero"
          label="Número"
          type="number"
          margin="normal"
          variant="outlined"
        ></TextField>
        <TextField
          id="cidade"
          label="Estado"
          type="text"
          variant="outlined"
          margin="normal"
        ></TextField>
        <TextField
          id="cidade"
          label="Cidade"
          type="text"
          variant="outlined"
          margin="normal"
        ></TextField>
        <Button variant="contained" type="submit" color="primary" fullWidth>
            
          Finalizar Cadastro
        </Button>
      </form>
    </>
  );
}

export default DadosEntrega;
