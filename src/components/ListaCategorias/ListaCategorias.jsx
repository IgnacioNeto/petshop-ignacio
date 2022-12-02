import { useState, useEffect } from "react"; // Hook do react
import estilos from "./ListaCategorias.module.css";
import serverApi from "../../api/servidor-api";
import LoadingDesenho from "../LoadingDesenho/LoadingDesenho";
import { NavLink } from "react-router-dom";

const ListaCategorias = () => {
  const [categorias, setCategorias] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getCategorias() {
      try {
        const resposta = await fetch(`${serverApi}/categorias.json`);
        const dados = await resposta.json();
        const listaDeCategorias = [];

        for (const categoria in dados) {
          const objetoCategoria = {
            id: categoria,
            nome: dados[categoria].nome,
          };
          listaDeCategorias.push(objetoCategoria);
        }

        setCategorias(listaDeCategorias);
        setLoading(false);
      } catch (error) {
        console.log("Deu ruim!" + error.message);
      }
    }
    getCategorias();
  }, []);

  // abaixo mesmo que true
  if (loading) {
    return <LoadingDesenho ldNome={"Categorias..."} />;
  }

  return (
    <div className={estilos.lista_categorias}>
      <ul>
        {categorias.map(({ id, nome }) => (
          <li key={id}>
            <NavLink to={`/categoria/${nome}`} activeClassName={estilos.ativo}>
              {nome}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaCategorias;
