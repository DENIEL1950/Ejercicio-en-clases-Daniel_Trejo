import './App.css';
import Contador from './components/Contador';
import { useState } from 'react';

function App() {
  const [valor, setValor] = useState(0);

  //incrementar el valor
  const incrementarHandler = () =>{
    setValor(valor + 1);
    console.log("incrementarValor");
  }
  //decrementar el valor
  const decrementarHandler = () =>{
    setValor(valor -1);
    console.log("decrementarValor");
  }

  return (
    <div className="App">
      <Contador valor={valor}/>
      <div>
        <button className='btn btn-primary tamanio' onClick={incrementarHandler}>+</button>
        <button className='btn btn-danger tamanio' onClick={ () => setValor(0)}>Clear</button>
        <button className='btn btn-primary tamanio' onClick={decrementarHandler}>-</button>
      </div>
    </div>
  );
}

export default App;

/*


*/
