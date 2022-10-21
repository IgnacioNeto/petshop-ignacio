import estilos from "./Caixa.module.css";

// Versão props desestruturada
const Caixa = ({ children, listaDeClasses }) => {
  return (
    <div className={`${estilos.caixa} ${listaDeClasses || ""}`}>{children}</div>
  );
};

export default Caixa;
