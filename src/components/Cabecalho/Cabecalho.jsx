import Menu from "../Menu/Menu";
import estilos from "./Cabecalho.module.css";
import logo from "../../assets/images/logo.png";

const Cabecalho = () => {
  return (
    <header className={estilos.topo}>
      <div className="limitador">
        <h1>
          <a href="">
            <img src={logo} alt="Patinha dentro de um coração" />
            PetShop
          </a>
        </h1>

        <Menu />
      </div>
    </header>
  );
};

export default Cabecalho;
