import { Link } from "react-router-dom";
import estilos from "../../components/ListaPosts/ListaPosts.module.css";

const Artigo = ({ id, titulo, subtitulo }) => {
  return (
    <article className={estilos.post}>
      {/* Usamos Link para ser assíncrono */}
      <Link to={`/posts/${id}`}>
        <h3>{titulo}</h3>
        <h4>{subtitulo}</h4>
      </Link>
    </article>
  );
};

export default Artigo;
