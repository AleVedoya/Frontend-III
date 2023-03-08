import './FruitForm.css';

const FruitForm = () => {
    const [fruits, setFruit] = useState([]);

    const addFruit = fruit => {
          setFruit([fruit, ...fruits]);
      }

  return (
    <form className='text-form'>
      <input
        className="text-input"
        type="text"
        placeholder="Agregar fruta"
        name="texto"
      />
      <button onClick={addFruit} className="buttonAdd">
        Agregar una fruta
      </button>
    </form>
  );
}


export default FruitForm