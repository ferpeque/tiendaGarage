import { ItemCount } from "../ItemCount"

export const ItemListContainer = ({cardData, stock}) => {
    
const onAdd = () => { 
        console.log("se tiene que ver el stock")
     }

    return (
        <div className="card container">
            <h1>{cardData.greetins}</h1>
            <h1>{stock}</h1>
            <ItemCount stock={stock} initial={1} onAdd={onAdd} />
        </div>
    )
}   