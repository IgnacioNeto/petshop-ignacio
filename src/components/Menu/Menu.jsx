import estilos from "./Menu.module.css";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <nav>
      <NavLink exact to="/" activeClassName={estilos.ativo}>
        Blog
      </NavLink>
      <NavLink to="/produtos" activeClassName={estilos.ativo}>
        Produtos
      </NavLink>
      <NavLink to="/sobre" activeClassName={estilos.ativo}>
        Sobre
      </NavLink>
      <NavLink to="/contato" activeClassName={estilos.ativo}>
        Contato
      </NavLink>
    </nav>
  );
};

export default Menu;
