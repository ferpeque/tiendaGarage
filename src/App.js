import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { IconCarrito } from "./components/CartWidget";
import { HomeContainer } from "./Container/HomeContainer";
import React, {useEffect, useState} from "react"



function App() {

  const [productos, setProductos] = useState ([]);

    useEffect ( async () => {
      const response = await fetch("https://mocki.io/v1/068fb553-24a4-440f-ba3d-dc57f1cc13cd")
      const json = await response.json()  
      setProductos(json)
      console.log(productos)
    }, [])

  return (     
        <HomeContainer/>    
  );
}

export default App;
