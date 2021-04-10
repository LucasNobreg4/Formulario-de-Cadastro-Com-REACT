import { Button, TextField } from "@material-ui/core";

import React from "react";

function DadosEntrega({aoEnviar}) {
  return (
    <>
      <form
      onSubmit={(event) => {
        event.preventDefault();
        aoEnviar();
      }}
      >
        
        <TextField
          id="cep"
          label="CEP (apenas números)"
          type="number"
          margin="normal"
          variant="outlined"
          fullWidth
          required
        ></TextField>
        <TextField
          id="endeco"
          label="Endereço"
          type="text"
          variant="outlined"
          margin="normal"
          fullWidth
          required
        ></TextField>
        <TextField
          id="numero"
          label="Número"
          type="number"
          margin="normal"
          variant="outlined"
          required
        ></TextField>
        <TextField
          id="estado"
          label="Estado"
          type="text"
          variant="outlined"
          margin="normal"
          required
        ></TextField>
        <TextField
          id="cidade"
          label="Cidade"
          type="text"
          variant="outlined"
          margin="normal"
          required
        ></TextField>
        <Button variant="contained" type="submit" color="primary" fullWidth>
            
          Finalizar Pedido
        </Button>
      </form>
    </>
  );
}

export default DadosEntrega;
