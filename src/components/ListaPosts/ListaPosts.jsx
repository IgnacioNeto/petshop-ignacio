import { useState, useEffect } from "react"; // Hook do react
import servidorApi from "../../api/servidor-api";
import estilos from "./ListaPosts.module.css";
import Artigo from "./Artigo";
import serverApi from "../../api/servidor-api";

const ListaPosts = () => {
  /* Iniciamos o state do componente com um array VAZIO,
  para posteriormente "preenchê-lo" com dados vindos da API
  Esta atribuição será feita com auxílio do setPosts */
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getPosts() {
      try {
        const resposta = await fetch(`${serverApi}/posts`);
        const dados = await resposta.json();
        setPosts(dados);
      } catch (error) {
        console.log("Deu ruim!" + error.message);
      }
    }
    getPosts();
  }, []);

  /* Sobre o useEffect
  Este hook visa permitir um maior controle sobre "efeitos
  colaterais" na execusão do componente
  
  Recebe 2 parâmetros:
  1º função callback com o que será executado
  2º lista de dependências que indicarão ao useEffect quando ele deverá funcionar

  - Se não passar a lista (ou seja, se deixar sem []), useEffect executará toda vez
  que o componente for renderizado. Portanto, o callback se torna um loop infinito.

  - Se passar a lista vazia (ou seja, se deixar o []), useEffect executará somente
  no momento que o componente é renderizado pela primeira vez, evitando o loop
  infinito no callback.
  
  */

  return (
    <div className={estilos.lista_posts}>
      {posts.map(({ id, titulo, subtitulo }) => (
        <Artigo key={id} titulo={titulo} subtitulo={subtitulo}></Artigo>
      ))}
    </div>
  );
};

export default ListaPosts;
