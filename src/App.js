/* COMPONENTS */
import Barnav from './components/Navbar/BarNav';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { useEffect } from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom"



/* BOOTSTRAP AND AOS */
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import AOS from 'aos';


function App() {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <BrowserRouter>
      <>

        <Barnav />

        <Routes>
          <Route exact path="/" element={ <ItemListContainer /> } />
          <Route exact path="/category/:categoryID" element={ <ItemListContainer /> } />
          <Route exact path="/detail/:detailID" element={ <ItemDetailContainer /> } />
        </Routes>

      </>
    </BrowserRouter>
  );
}

export default App;
