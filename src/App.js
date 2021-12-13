/* COMPONENTS */
import Barnav from './components/Navbar/BarNav';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { useEffect } from 'react';


/* BOOTSTRAP AND AOS */
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>

      <Barnav />

      <ItemListContainer></ItemListContainer>

      <ItemDetailContainer></ItemDetailContainer>

    </div>
  );
}

export default App;
