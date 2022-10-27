import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Cabecalho from "./components/Cabecalho/Cabecalho";
import Home from "./pages/Home/Home";
import Produtos from "./pages/Produtos/Produtos";
import Sobre from "./pages/Sobre/Sobre";
import Contato from "./pages/Contato/Contato";
import Pagina404 from "./pages/Erro404/Pagina404";
import Post from "./pages/Post/Post";
import Categoria from "./pages/Categoria/Categoria";

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

            <Route exact path="/posts">
              <Redirect to="/" />
            </Route>

            <Route path="/posts/:id">
              <Post />
            </Route>

            {/* Estamos usando o :nome em vez de :id com o propósito
de ter uma URL amigável (slug) */}
            <Route exact path="/categoria/:nome">
              <Categoria />
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
            <Route path="*">
              <Pagina404 />
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
    </>
  );
};

export default App;
