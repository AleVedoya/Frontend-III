import { useState } from "react";
import "./FuncComp.css";

const FruitComp = ({ fruit}) => {
  
  return (
    <div className="list-container">
      <div className="text-list">
        {fruit}
      </div>
      <div className="add-text-button">
      <button onClick={addFruit} className="buttonAdd">Agregar una fruta</button>
      </div>
    </div>
  )

















  // const [fruits, setFruit] = useState([
  //   {
  //     id: 1,
  //     name: "pera",
  //   },
  //   {
  //     id: 1,
  //     name: "manzana",
  //   },

  //   {
  //     id: 1,
  //     name: "banana",
  //   },
  //   {
  //     id: 1,
  //     name: "durazno",
  //   },
  //   {
  //     id: 1,
  //     name: "pomelo",
  //   },
  //   {
  //     id: 1,
  //     name: "naranja",
  //   },
  // ]);

  // //   const [valor, setValor] = useState();

  // //   const handlerChange = ({ target }) => {
  // //     setValor(target.value);
  // //   };

  // const addFruit = () => {
  //   setFruit(arr => [...fruits, `${arr.length}`]);
  // };

  // return [
  //   <>
  //       <ul>
  //           {fruits.map(fruit =>(
  //            <li className="fruitList"><span>La fruta {fruit.name} se añadió a la lista</span></li>
  //           ))}
  //       </ul>
  //       <button onClick={addFruit} className="buttonAdd">Agregar una fruta</button>
  //   </>
  // ];
};

export default FruitComp;
