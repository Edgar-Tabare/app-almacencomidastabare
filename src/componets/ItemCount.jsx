
const ItemCount = ({cantidad,handleRestar,handleSumar,handleComprar}) => {

   
  return (
    <div>
      <div className="item-count">
        <button onClick={handleRestar}>-</button>
        <p>{cantidad}</p>
        <button onClick={handleSumar}>+</button>
      </div>
      <button className="agregar-al-carrito" onClick={handleComprar} >Comprar</button>
    </div>
  );
};

export default ItemCount;
