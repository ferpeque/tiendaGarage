import { ItemCount } from "../ItemCount"
import './style.css';
import React, {useEffect, useState} from "react"


export const ItemListContainer = ({cardData, stock, productos}) => {
    
const onAdd = () => { 
        console.log("se tiene que ver el stock")
     }

    return (
        <div className="container">
            <div  className="col-md-6 col-sm-6 d-flex ">
                 <div  className="card card-block d-flex align-items-center">
                    
        <h4  className="card-title text-right"><i  className="material-icons"></i></h4>
            <img src="serv/1.serv.jpg" alt="Tripode - Prodcuto Fotografico"  className="img-fluid tamaño_img"/>
                <h5  classNames="card-title mt-3 mb-3 text-center">{cardData.greetins}</h5>
                    <h1>{stock}</h1>
                        <p  className="text-center card_text">{productos.nombre}</p> 
                             <ItemCount stock={stock} initial={1} onAdd={onAdd} />
                    </div>
                </div>
        </div>




    )
}   

