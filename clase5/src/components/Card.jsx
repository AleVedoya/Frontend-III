import './Card.css'

const Card = ({producto}) => {
  return (
    <div key={producto.id} className='card'>
      <h2 className="card-nombre">{producto.nombre}</h2>
      <img src={producto.imagen} alt="" className="card-img"/>
      <h3 className="card-precio">{producto.precio}</h3>
    </div>
  );
};

export default Card;