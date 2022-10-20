import estilos from "./Menu.module.css";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <nav>
      <NavLink exact to="/" activeClassName={estilos.ativado}>
        Home
      </NavLink>
      <NavLink to="/produtos" activeClassName={estilos.ativado}>
        Produtos
      </NavLink>
      <NavLink to="/sobre" activeClassName={estilos.ativado}>
        Sobre
      </NavLink>
      <NavLink to="/contato" activeClassName={estilos.ativado}>
        Contato
      </NavLink>
    </nav>
  );
};

export default Menu;
