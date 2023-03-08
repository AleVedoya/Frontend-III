import { useState } from "react";
import './FuncComp.css'

const FuncComponent = () => {
  const [fruits, setFruit] = useState([]);

  const [valor, setValor] = useState();

  const handlerChange = ({ target }) => {
    setValor(target.value);
  };

  const addFruit = () => {
    setFruit([...fruits, { valor }]);
  };

  return (
    <>
      <div className="container">
        <ul>
            {fruits.map(fruit =>(
             <li className="fruitList"><span>La fruta {fruit.valor} se añadió a la lista</span></li>
            ))}
        </ul>
        <input type="text" onChange={handlerChange} />
        <button onClick={addFruit} className="buttonAdd">Agregar una fruta</button>
      </div>
    </>
  );
};

export default FuncComponent;
