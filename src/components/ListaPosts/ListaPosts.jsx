import { useState, useEffect } from "react"; // Hook do react
import estilos from "./ListaPosts.module.css";
import Artigo from "./Artigo";
import serverApi from "../../api/servidor-api";
import LoadingDesenho from "../LoadingDesenho/LoadingDesenho";

const ListaPosts = ({ url }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    async function getPosts() {
      try {
        // const resposta = await fetch(`${serverApi}/posts`);
        const resposta = await fetch(`${serverApi}/${url || "posts"}`);
        const dados = await resposta.json();
        setPosts(dados);
        setLoading(false);
      } catch (error) {
        console.log("Deu ruim!" + error.message);
      }
    }
    getPosts();
    /* É necessário indicar a url como dependência pois ela muda 
  toda vez em que uma categoria é clicada */
    /* Desta forma, o UseEffect "entende" que ele deve executar novamente
  as suas ações (neste caso, executar novamente o fetch na API) */
  }, [url]);

  // abaixo mesmo que true
  if (loading) {
    // return <mark style={{ backgroundColor: "Red" }}>Carregando...</mark>;
    return <LoadingDesenho ldNome={"Posts..."} />;
  }

  if (posts.length > 0) {
    return (
      <div className={estilos.lista_posts}>
        {posts.map(({ id, titulo, subtitulo }) => (
          <Artigo
            key={id}
            id={id}
            titulo={titulo}
            subtitulo={subtitulo}
          ></Artigo>
        ))}
      </div>
    );
  } else {
    return <h2 className={estilos.centralizado}>Não há posts...</h2>;
  }
};

export default ListaPosts;
