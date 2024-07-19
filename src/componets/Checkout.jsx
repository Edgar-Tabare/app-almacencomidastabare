import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useForm } from "react-hook-form";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/config";


const Checkout = () => {

    const [pedidoId, setPedidoId] = useState ("")

    const{ carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

    const { register, handleSubmit } = useForm();

    const registrarCompra = (data) => {
      const pedido = {
        cliente: data,
        producto: carrito,
        total: precioTotal()
      }
      console.log(pedido);

      const pedidoRef = collection ( db, "pedidos");

      addDoc(pedidoRef, pedido)
      .then((doc)=>{
        setPedidoId(doc.id);
        vaciarCarrito();
      })
    };

    if (pedidoId){
        return (
            <div className="container" >
                <h1 className="main-title"> Gracias su compra fue exitosa</h1>
                <p>Retira su compra con el número   <br /> <h1>{pedidoId}</h1></p>
            </div>
        )
    }
  
    return (
      <div className="container">
        <h1 className="main-title">Registre Su Compra</h1>
        <form className="formulario" onSubmit={handleSubmit(registrarCompra)}>
         
          <input type="name" placeholder="Nombre"{...register("name")} />
          <input type="phone" placeholder="Telefono"{...register("phone")} />
          <input type="email" placeholder="email"{...register("email")} />
  
          <button className="enviar" type="submit">
            Comprar 
          </button>
        </form>
      </div>
    );
}

export default Checkout