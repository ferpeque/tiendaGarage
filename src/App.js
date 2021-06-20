import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { IconCarrito } from "./components/CartWidget";
import { HomeContainer } from "./Container/HomeContainer";


function App() {

  async function getData () {
    const response = await fetch("https://mocki.io/v1/068fb553-24a4-440f-ba3d-dc57f1cc13cd")
    const data = await response.json();
    return data
}

console.log(getData())


  return (     
        <HomeContainer/>    
  );
}

export default App;
