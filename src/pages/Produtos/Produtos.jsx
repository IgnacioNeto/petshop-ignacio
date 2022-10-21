import estilos from "./Produtos.module.css";
import Caixa from "../../components/Caixa/Caixa";

const Produtos = () => {
  return (
    <section>
      <h2 className={estilos.titulo_secao}>Pet contato</h2>

      <Caixa id="produtos" listaDeClasses={estilos.produtos}>
        <article>
          <h3>produto 1</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequatur, delectus est? Est laudantium eum laboriosam? Sunt
            soluta cum ullam harum, alias ipsum natus officiis molestiae unde
            non dolor. Facere, similique!
          </p>
        </article>
        <article>
          <h3>produto 2</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequatur, delectus est? Est laudantium eum laboriosam? Sunt
            soluta cum ullam harum, alias ipsum natus officiis molestiae unde
            non dolor. Facere, similique!
          </p>
        </article>
        <article>
          <h3>produto 3</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequatur, delectus est? Est laudantium eum laboriosam? Sunt
            soluta cum ullam harum, alias ipsum natus officiis molestiae unde
            non dolor. Facere, similique!
          </p>
        </article>
      </Caixa>
    </section>
  );
};

export default Produtos;
