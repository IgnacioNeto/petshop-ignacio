import estilos from "./Contato.module.css";
import Caixa from "../../components/Caixa/Caixa";
import { Button, TextField } from "@mui/material";

const Contato = () => {
  return (
    <section>
      <h2 className={estilos.titulo_secao}>Contato</h2>
      <Caixa>
        <form method="post">
          <div>
            <TextField
              type="text"
              label="Nome"
              variant="outlined"
              fullWidth
              required
              helperText="Você deve digitar o nome"
            />
          </div>

          <div>
            <TextField
              type="email"
              label="E-mail"
              variant="outlined"
              fullWidth
              required
              helperText="Informa um e-mail para contato"
            />
          </div>

          <div>
            <TextField
              type="text"
              label="Mensagem"
              variant="outlined"
              fullWidth
              required
              helperText="Fale o que você quiser"
              multiline
              rows={6}
            />
          </div>

          <div>
            <Button type="submit" variant="contained">
              Enviar mensagem
            </Button>
          </div>
        </form>
      </Caixa>
    </section>
  );
};

export default Contato;
