import React, {useState} from 'react';
import './App.css';
import Buscar from './Componentes/Bucar/Buscar';
import Detalle from './Componentes/Detalle/Detalle';

function App() {

  const [elemento, setElemento] = useState({});

  return (
    <div className="App">
      <Buscar setElemento={setElemento}/>
      <Detalle elemento={elemento}/>
      
    </div>
  );
}

export default App;
