import estilos from "./ListaPosts.module.css";

const ListaPosts = () => {
  const posts = [
    {
      id: 1,
      titulo: "Banho no catiorrinho",
      subtitulo: "Use as utensilios certos para banhar seu cão",
      descricao:
        "Banhos regulares mantém os pelos e pele de seu cachorro limpa, renovada e saudável. O processo de ensaboar e escovar remove resíduos de pelos e peles que já estão mortas, providenciando um maior respiro da pele de seu cachorro",
      categoria: "bem-estar",
    },
    {
      id: 2,
      titulo: "Seu catiorrinho merece um tapete refrescante",
      subtitulo: "O frescor que seu pet merece",
      descricao:
        "O produto é um colchonete de nylon, recheado com espuma e gel (não tóxico), que promete refrescar os bichos. O gel interno é ativado com o peso e a pressão do animal, ou seja, começa a funcionar quando o pet está sobre ele. O tapete promete baixar a temperatura entre 6ºC e 10°C em relação à registrada no ambiente.",
      categoria: "bem-estar",
    },
    {
      id: 3,
      titulo: "Cuidado com as pulgas!",
      subtitulo: "Evite que seus animais sejam afetados por esses parasitas",
      descricao:
        "Para prevenir que o seu pet seja infestado, coleiras e sprays anti-pulgas e carrapatos são boas opções. Procure uma clínica veterinária para saber qual é a melhor escolha para o seu animal, de acordo com o porte, tipo de pelo e idade. Os sprays precisam ser reforçados a cada 30 dias para que o efeito seja mantido.",
      categoria: "bem-estar",
    },
  ];

  return (
    <div className={estilos.lista_posts}>
      <article className={estilos.post}>
        <h3>Título do post...</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis
          corporis neque perspiciatis repellendus facilis ab officia dolor
          accusamus, illo dicta, quos quisquam? Illo fugit ratione sit ducimus,
          aut atque perspiciatis.
        </p>
      </article>
      <article className={estilos.post}>
        <h3>Título do post...</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis
          corporis neque perspiciatis repellendus facilis ab officia dolor
          accusamus, illo dicta, quos quisquam? Illo fugit ratione sit ducimus,
          aut atque perspiciatis.
        </p>
      </article>
      <article className={estilos.post}>
        <h3>Título do post...</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis
          corporis neque perspiciatis repellendus facilis ab officia dolor
          accusamus, illo dicta, quos quisquam? Illo fugit ratione sit ducimus,
          aut atque perspiciatis.
        </p>
      </article>
      <article className={estilos.post}>
        <h3>Título do post...</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis
          corporis neque perspiciatis repellendus facilis ab officia dolor
          accusamus, illo dicta, quos quisquam? Illo fugit ratione sit ducimus,
          aut atque perspiciatis.
        </p>
      </article>
    </div>
  );
};

export default ListaPosts;
