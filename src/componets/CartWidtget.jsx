import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const CartWidget = () => {
  const { cantidadEnCarrito } = useContext(CartContext);

  const cantidad = cantidadEnCarrito ? cantidadEnCarrito() : 0;

  return (
    <div>
      <Link className="menu-link" to="/carrito">
        Carrito
        <span className="numerito">{cantidad}</span>
      </Link>
    </div>
  );
};

export default CartWidget;