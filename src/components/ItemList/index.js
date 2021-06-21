import React from 'react';
import {ItemListContainer} from '../ItemListContainer';

function ItemLists ({productos}) {
    <div>
        {productos.map(productos=>{ 
            return <ItemListContainer productos={productos} key={productos.id}/>
        })}

    </div>

}

export default ItemLists