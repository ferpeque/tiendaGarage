import React, {useState} from "react"


export const ItemCount = ({stock, initial, onAdd}) => {

const [itemCount, setCounter] = useState(initial)

    const sumar = () => { 
        if (itemCount<stock) {
            setCounter(itemCount+1)
     }}
    
     
     const restar = () => { 
        if(itemCount>1) {
            setCounter(itemCount-1)    
     }}



    return (
        <>
        <button onClick={restar}>-</button>
        <p> {itemCount} </p>
        <button onClick={sumar}>+</button>
        <br></br>
        <button onClick={onAdd}>Agregar a Carrito</button>
        </>
    )
}