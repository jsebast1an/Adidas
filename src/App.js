/* COMPONENTS */
import Barnav from './components/Navbar/BarNav';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { useEffect } from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { CartContextProvider } from './context/CartContext';


/* BOOTSTRAP AND AOS */
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import Cart from './components/Cart/Cart';


function App() {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <CartContextProvider>
        <BrowserRouter>
          <>

            <Barnav />

            <Routes>
              <Route exact path="/" element={ <ItemListContainer /> } />
              <Route exact path="/category/:categoryID" element={ <ItemListContainer /> } />
              <Route exact path="/detail/:detailID" element={ <ItemDetailContainer /> } />
              
              <Route exact path="/cart" element={ <Cart></Cart> } />
            </Routes>

          </>

        </BrowserRouter>

    </CartContextProvider>
  );
}

export default App;
