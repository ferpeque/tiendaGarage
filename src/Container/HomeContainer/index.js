import { ItemListContainer } from "../../components/ItemListContainer";
import { NavBar } from "../../components/NavBar";
import React, {useEffect, useState} from "react"

export const HomeContainer = () => {
 //   const card = {greetins:'Aqui va a ir un Card'}
 //cardData={card} 

const [productos, setProductos] = useState ([]);

 useEffect (async ()=>{
      
const response = await fetch("./json/products.json")
      const json = await response.json()  
      setProductos(json)   
    },[])


    return (
        <>  
            <NavBar/>
            <section>
            <ItemListContainer productos={productos} stock={6} />
         
           
            </section>
        </>
    )
}