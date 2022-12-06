import { useState, useEffect } from "react";
import estilos from "./Post.module.css";
import Caixa from "../../components/Caixa/Caixa";
import { useHistory, useParams } from "react-router-dom";
import serverApi from "../../api/servidor-api";
import LoadingDesenho from "../../components/LoadingDesenho/LoadingDesenho";

const Post = () => {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(true);

  /* Hook do react-router que permite utilizar recursos de navegação
  no histórico do navegador */
  let history = useHistory();

  /* useParams() -> hook do react-router que permite acesso/manipulação
    de parâmetros vindos da URL */
  const { id } = useParams();

  useEffect(() => {
    async function getPost() {
      try {
        /* Ao adicionar o .json após o id os dados do RealTime DataBase
        são lidos como objeto */
        const resposta = await fetch(`${serverApi}/posts/${id}.json`);
        const dados = await resposta.json();
        setPost(dados);
        setLoading(false);
        /* Se não existir dados (post inesistente) vá para a rota 404  */
        if (!dados) {
          /* Então forçamos o redirecionamento para uma rota de 1º nível
            e o router traz a pg. 404 */
          history.push("/404");
        }
      } catch (error) {
        console.log("Deu ruim na busca do post: " + error.message);
      }
    }
    getPost();
  }, [id, history]); // id é uma dependência para o useEffect

  if (loading) {
    return <LoadingDesenho ldNome={"Carregando conteúdo do post..."} />;
  }

  return (
    <section className={estilos.lista_posts}>
      <h2>{post.titulo} </h2>
      <Caixa>
        <h3>{post.categoria}</h3>
        <p>{post.descricao}</p>
      </Caixa>
    </section>
  );
};

export default Post;
