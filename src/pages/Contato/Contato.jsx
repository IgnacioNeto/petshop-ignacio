import { Button, TextField } from "@mui/material";
import estilos from "./Contato.module.css";
import Caixa from "../../components/Caixa/Caixa";
import { useState } from "react";
import serverApi from "../../api/servidor-api";
import { useHistory } from "react-router-dom";

const Contato = () => {
  /* Eventos/Funções para captura da digitação nos campos */
  const inputNome = (event) => setNome(event.target.value);
  const inputEmail = (event) => setEmail(event.target.value);
  const inputMensagem = (event) => setMensagem(event.target.value);

  /* Hook useState para manipular os estados dos dados do componente */
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  /* Hook useHistory (Necessário para navegação/ redirecionamento
   manualmente, ou seja sem depender dos routes)*/
  let history = useHistory();

  const enviarContato = async (event) => {
    // Evita o comportamento padrão de tentar recarregar a página.
    event.preventDefault();

    // Para testar
    // console.log(nome, email, mensagem);

    /* Script para envio dos dados para a API */
    const opcoes = {
      method: "POST",
      body: JSON.stringify({ nome, email, mensagem }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    };

    try {
      await fetch(`${serverApi}/contatos`, opcoes);
      alert("Dados enviados!");
      history.push("/"); // Redireciona para a home/blog
    } catch (error) {
      console.log("Deu ruim: " + error.message);
    }
  };

  // Lógica para iniciar o botão desabilitado e só habilitar após preencher campos
  // let desabilitado = nome ==="" || email ==="" || mensagem ==="";
  let desabilitado = !nome || !email || !mensagem;

  return (
    <section>
      <h2 className={estilos.titulo_secao}>Contato</h2>
      <Caixa>
        <form
          onSubmit={enviarContato}
          method="post"
          className={estilos.formulario}
        >
          <div>
            <TextField
              onChange={inputNome}
              type="text"
              label="Nome"
              variant="outlined"
              fullWidth
              required
              // Ao iniciar a digitação o texto help (abaixo desaparece)
              helperText={!nome ? "Você deve digitar o nome" : ""}
            />
          </div>

          <div>
            <TextField
              onChange={inputEmail}
              type="email"
              label="E-mail"
              variant="outlined"
              fullWidth
              required
              helperText={!email ? "Informa um e-mail para contato" : ""}
            />
          </div>

          <div>
            <TextField
              onChange={inputMensagem}
              type="text"
              label="Mensagem"
              variant="outlined"
              fullWidth
              required
              helperText={!mensagem ? "Fale o que você quiser" : ""}
              multiline
              rows={6}
            />
          </div>

          <div>
            <Button type="submit" variant="contained" disabled={desabilitado}>
              Enviar mensagem
            </Button>
          </div>
        </form>
      </Caixa>
    </section>
  );
};

export default Contato;
