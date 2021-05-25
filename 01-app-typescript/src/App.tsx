import { TiposBasicos } from "./typescript/TiposBasicos";
import { ObjetosLiterales } from './typescript/ObjetosLiterales';
import { Funciones } from "./typescript/Funciones";
import { Contador } from "./components/Contador";
import { ContadorWhitHook } from './components/ContadorWhitHook';
import { Login } from "./components/Login";
import { Usuarios } from "./components/Usuarios";
import { Formularios } from './components/Formularios';

 const App = () => {
  return (
    <div className="mt-2">
      <h1>Intro typeScript</h1>
      <hr />
      <Formularios />
      <hr />
      <Usuarios />
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