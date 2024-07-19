import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contactos from "./componets/Contactos";
import ItemDetailContainer from "./componets/ItemDetailContainer";
import ItemListContainer from "./componets/ItemListContainer";
import NavBar from "./componets/NavBar";
import Nosotros from "./componets/Nosotros";
import Carrito from "./componets/Carrito";
import { CartProvider } from "./context/CartContext";

import "./main.css";
import Checkout from "./componets/Checkout";

function App() {
  return (
    <div>
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/productos" element={<ItemListContainer />} />
            <Route
              path="/productos/:categoria"
              element={<ItemListContainer />}
            />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/contactos" element={<Contactos />} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/checkout" element={< Checkout />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
