import React, { Fragment } from "react";
import Button from "@material-ui/core/Button"

function FormularioCadastro() {
  return (
    <Fragment>
      <form>
        <label htmlFor="">Nome</label>
        <input type="text" />
        <label htmlFor="">Sobrenome</label>
        <input type="text" />
        <label htmlFor="">CPF</label>
        <input type="text" />
        <label htmlFor="">Promoções</label>
        <input type="checkbox" />
        <label htmlFor="">Novidades</label>
        <input type="checkbox" />
        <Button variant="contained" collor="primary" type="submit">Cadastrar</Button>
      </form>
    </Fragment>
  );
}
export default FormularioCadastro;
