import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { IconCarrito } from "./components/CartWidget";
import { ItemListContainer } from "./components/ItemListContainer";


function App() {
  const card = {greetins:'Aqui va a ir un Card'}
  return (
    <div className="App">
        <NavBar/>
        <ItemListContainer cardData={card}/>
    </div>
  );
}

export default App;
