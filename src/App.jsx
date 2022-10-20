import { BrowserRouter, Switch, Route } from "react-router-dom";

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
      <BrowserRouter>
        <Cabecalho />
        <main className="limitador">
          <Switch>
            {/* Sintaxe alternativa */}
            {/* <Route exact path="/" component={Home}> */}
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/produtos">
              <Produtos />
            </Route>
            <Route path="/sobre">
              <Sobre />
            </Route>
            <Route path="/contato">
              <Contato />
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
    </>
  );
};

export default App;
