import { useContext, useState } from 'react';
import ItemCount from './ItemCount';
import { CartContext } from '../context/CartContext';

const ItemDetail = ({ item }) => {
  const { carrito, agregarComprar } = useContext(CartContext);
  console.log(carrito);

  const [cantidad, setCantidad] = useState(1);

  const handleRestar = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  const handleSumar = () => {
    if (cantidad < item.stock) {
      setCantidad(cantidad + 1);
    }
  };

  const handleComprar = () => {
    agregarComprar(item, cantidad);
  };

  return (
    <div className="container">
      <div className="producto-detalle">
        <img src={item.imagen} alt={item.titulo} />
      </div>
      <h3 className="titulo">{item.titulo}</h3>
      <p className="descripcion">{item.descripcion}</p>
      <p className="categoria">Categoria {item.categoria}</p>
      <p className="precio">${item.precio}</p>
      <ItemCount
        cantidad={cantidad}
        handleRestar={handleRestar}
        handleSumar={handleSumar}
        handleComprar={handleComprar}
      />
    </div>
  );
};

export default ItemDetail;
