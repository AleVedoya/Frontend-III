import { useState } from "react";
import "./FormComp.css";

const FormComp = () => {
  const [usuario, setUsuario] = useState({
    fullname: "",
    age: "",
    nationality: "",
  });
  const [show, setShow] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setShow(true);
  };

  return (
    <>
      <h2>Ingresá tus datos para registrarte</h2>
      <form className="form-container" onSubmit={handleSubmit}>
        <label>Nombre:</label>
        <input
          className="data-input"
          type="text"
          onChange={(e) => setUsuario({ ...usuario, fullname: e.target.value })}
        />
        <label>Edad:</label>
        <input
          className="data-input"
          type="text"
          onChange={(e) => setUsuario({ ...usuario, age: e.target.value })}
        />
        <label>Nacionalidad:</label>
        <input
          className="data-input"
          type="text"
          onChange={(e) =>
            setUsuario({ ...usuario, nationality: e.target.value })
          }
        />
        <button className="btn">Registrarse</button>
      </form>
      {show && (
        <div className="data-list">
          <h3>Nombre: {usuario.fullname}</h3>
          <h3>Edad: {usuario.age}</h3>
          <h3>Nacionalidad: {usuario.nationality}</h3>
        </div>
      )}
    </>
  );
};

export default FormComp;
