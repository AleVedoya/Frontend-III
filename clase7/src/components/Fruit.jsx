import { useState } from "react";

const Fruit = () => {
  const [iniState, setIniState] = useState([]);
  const [index, setIndex] = useState(0);

  const fruits = ["banana", "manzana", "durazno", "pera", "pomelo"];

  const addFruit = () => {
    setIniState([...iniState, fruits[index]]);
    if (index === fruits.length - 1) setIndex(0);
    else setIndex(index + 1);
  };

  return (
    <>
      <div className="container">
        <ul>
          {iniState.map((fruit, index) => (
            <li className="fruitList">
              <span>La fruta {iniState[index]} se añadió a la lista</span>
            </li>
          ))}
        </ul>
        <button onClick={addFruit} className="buttonAdd">
          Agregar una fruta
        </button>
      </div>
    </>
  );
};

export default Fruit;
