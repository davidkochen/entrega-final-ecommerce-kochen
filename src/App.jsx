import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Destacados from "./components/Destacados";
import Footer from "./components/Footer";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Error404 from "./components/Error404";
import CartContextProvider from "./components/context/CartContext";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import ThankYou from "./components/ThankYou";


function App() {
  return (
    <CartContextProvider>
        <BrowserRouter>
          <div>
            <Navbar/>
            <Banner/>
            <Routes>
              <Route path={"/"} element={<ItemListContainer/>}/>
              <Route path={"/category/:id"} element={<ItemListContainer/>}/>
              <Route path={"/item/:id"} element={<ItemDetailContainer/>}/>
              <Route path={"/cart"} element={<Cart/>} />
              <Route path={"/checkout"} element={<Checkout/>} />
              <Route path={"/ThankYou/:orderId"} element={<ThankYou/>} />
              <Route path={"*"} element={<Error404/>}/>
            </Routes>
          
            <Destacados/>
            <Footer/>

          </div>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
