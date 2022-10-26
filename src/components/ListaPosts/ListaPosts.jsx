import { useState, useEffect } from "react"; // Hook do react
import servidorApi from "../../api/servidor-api";
import estilos from "./ListaPosts.module.css";
import Artigo from "./Artigo";
import serverApi from "../../api/servidor-api";
import LoadingDesenho from "../LoadingDesenho/LoadingDesenho";

const ListaPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getPosts() {
      try {
        const resposta = await fetch(`${serverApi}/posts`);
        const dados = await resposta.json();
        setPosts(dados);
        setLoading(false);
      } catch (error) {
        console.log("Deu ruim!" + error.message);
      }
    }
    getPosts();
  }, []);

  // abaixo mesmo que true
  if (loading) {
    // return <mark style={{ backgroundColor: "Red" }}>Carregando...</mark>;
    return <LoadingDesenho />;
  }

  return (
    <div className={estilos.lista_posts}>
      {posts.map(({ id, titulo, subtitulo }) => (
        <Artigo key={id} id={id} titulo={titulo} subtitulo={subtitulo}></Artigo>
      ))}
    </div>
  );
};

export default ListaPosts;
