import { useState } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import Pedido from "./components/Pedido";

const pedidos = [
  { id: 1, name: "hamburguesa" },
  { id: 2, name: "pizza" },
  { id: 3, name: "papas" },
  { id: 4, name: "empanadas" },
];

let id = 0

function App() {
  const [pedidos, setPedidos] = useState([]);

  const handleAddPedido = (pedido) => {
    const newPedido = [...pedidos];
    newPedido.push({
      id: id++,
      name: pedido,
    });
    setPedidos(newPedido);
  };

  const handleDeletePedido = (id) => {
    const newPedido = pedidos.filter((pedido) => pedido.id !== id);
    setPedidos(newPedido);
  };

  console.log(pedidos);

  return (
    <div className="App">
      <Header title="Pedidos ya" />
      <Formulario onAgregar={handleAddPedido} />
      <hr />
      {/* <ListPedidos list = {pedidos}/> */}
      {pedidos.map((pedido) => {
        return (
          <Pedido
            key={pedido.id}
            pedido={pedido}
            onDelete={handleDeletePedido}
          />
        );
      })}
    </div>
  );
}

export default App;
