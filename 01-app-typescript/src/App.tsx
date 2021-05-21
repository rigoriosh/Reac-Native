import { TiposBasicos } from "./typescript/TiposBasicos";
import { ObjetosLiterales } from './typescript/ObjetosLiterales';
import { Funciones } from "./typescript/Funciones";
import { Contador } from "./components/Contador";
import { ContadorWhitHook } from './components/ContadorWhitHook';
import { Login } from "./components/Login";

 const App = () => {
  return (
    <div className="mt-2">
      <h1>Intro typeScript</h1>
      <hr />
      <Login/>
      <hr />
      <ContadorWhitHook/>
      <hr />
      <Contador />
      <hr />
      <Funciones />
      <hr />
      <ObjetosLiterales/>
      <hr />
      <TiposBasicos/>
      
    </div>
  )
}


export default App;