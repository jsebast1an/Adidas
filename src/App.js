import Barnav from './components/Navbar/BarNav';

/* BOOTSTRAP */
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
  return (
    <div>

      <Barnav />

      <ItemListContainer></ItemListContainer>

    </div>
  );
}

export default App;
