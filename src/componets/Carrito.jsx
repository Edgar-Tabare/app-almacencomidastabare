import  { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom';

export const Carrito = () => {
  
  const{ carrito, precioTotal, vaciarCarrito } = useContext(CartContext);
  
  const handleVaciar = () =>{
    vaciarCarrito();
  }

  return (

    <div className='container'>
      <h1 className='main-title'>Carrito</h1>

      {
        carrito.map((prod)=>(
          <div key={prod.id}>
            <br />
            <h2>{prod.titulo}</h2>
            <p>Precio unit: ${prod.precio}</p>
            <p>Precio total: ${prod.precio * prod.cantidad}</p>
            <p>Cant: {prod.cantidad}</p>
            <br />
          </div>
        ))
      }

      {
          carrito.length > 0 ?
          <>
              <h2>Precio total: ${precioTotal()}</h2>
              <button className="agregar-al-carrito" onClick={handleVaciar}>Vaciar</button>
              <Link className="agregar-al-carrito" to= "/checkout"> Realizar Comprar</Link>
          </> :
          <h2>El carrito está vacío </h2>
      }

    </div>
  )
}

export default Carrito;
