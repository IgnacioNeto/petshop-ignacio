import estilos from "./Sobre.module.css";
const Sobre = () => {
  return (
    <section>
      <h2 className={estilos.titulo_secao}>Sobre nosso PetShop</h2>
      <div id="sobre">
        <h3>Missão</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
          repudiandae natus inventore pariatur nostrum voluptate enim fuga at,
          quos numquam ab alias suscipit nihil reprehenderit maiores itaque
          soluta porro modi.
        </p>
        <h3>Visão</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
          repudiandae natus inventore pariatur nostrum voluptate enim fuga at,
          quos numquam ab alias suscipit nihil reprehenderit maiores itaque
          soluta porro modi.
        </p>
        <h3>Valores</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
          repudiandae natus inventore pariatur nostrum voluptate enim fuga at,
          quos numquam ab alias suscipit nihil reprehenderit maiores itaque
          soluta porro modi.
        </p>
      </div>
    </section>
  );
};

export default Sobre;
