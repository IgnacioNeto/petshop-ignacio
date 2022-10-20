import Cabecalho from "./components/Cabecalho/Cabecalho";
import Home from "./pages/Home/Home";
import Produtos from "./pages/Produtos/Produtos";
import Sobre from "./pages/Sobre/Sobre";
import Contato from "./pages/Contato/Contato";

const App = () => {
  return (
    /* No disso (<>) fragmento (É como uma div mais invisível,
         apenas para o React entender)*/
    <>
      <Cabecalho />
      <main className="limitador">
        <Home />
        <Produtos />
        <Sobre />
        <Contato />
      </main>
    </>
  );
};

export default App;
