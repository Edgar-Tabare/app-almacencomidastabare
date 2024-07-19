import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

const carritoInicial = JSON.parse(localStorage.getItem("carrito")) || [];

export const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState(carritoInicial);

  const agregarComprar = (item, cantidad) => {
    const itemComprado = { ...item, cantidad };

    const newCarrito = [...carrito];
    const itemYaComprado = newCarrito.find(
      (producto) => producto.id === itemComprado.id
    );

    if (itemYaComprado) {
      itemYaComprado.cantidad += cantidad;
    } else {
      newCarrito.push(itemComprado);
    }
    setCarrito(newCarrito);
  };

  const cantidadEnCarrito = () => {
    return carrito.reduce((acc, prod) => acc + prod.cantidad, 0);
  };

  const precioTotal = () => {
    return carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0);
  };

  const vaciarCarrito = () => {
    setCarrito([]);
    localStorage.removeItem("carrito");
  };

  useEffect(() => {
    if (carrito.length > 0) {
      localStorage.setItem("carrito", JSON.stringify(carrito));
    }
  }, [carrito]);

  return (
    <CartContext.Provider value={{ 
        carrito, 
        agregarComprar, 
        cantidadEnCarrito, 
        precioTotal, 
        vaciarCarrito 
    }}>
      {children}
    </CartContext.Provider>
  );
};
