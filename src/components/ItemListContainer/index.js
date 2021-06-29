import './style.css';
import React, {useEffect, useState} from 'react'
import { ItemLists } from '../ItemList'





export const ItemListContainer = ({stock}) => {
    
const onAdd = () => { 
        console.log("se tiene que ver el stock")
     }
     
 //    {cardData.greetins}
     
const [productos, setProducto] = useState([])

     useEffect ( async () =>{
         const response = await fetch ('./products.json')
         const json = await response.json()
         setProducto(json)
         console.log(productos)
    },[])

    return (  
        <ItemLists productos={productos}/>
    )
}   

