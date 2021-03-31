import "./App.css";
import FormularioCadastro from "./componets/FormularioCadastro/FormularioCadastro";
import { Container, Typography } from "@material-ui/core";
import 'fontsource-roboto';
function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" component="h1" >
        Formulario Porto Digital
      </Typography>
      <FormularioCadastro />
    </Container>
  );
}

export default App;
