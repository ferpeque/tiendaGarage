import React from 'react';
import { Item } from '../Item';

export const ItemLists =  ({productos}) =>{
    return (
        <div>
        {productos.map(productos=>{ 
            return <Item productos={productos} key={productos.id}/>        
        }) 
}
            </div>
        )
    }



