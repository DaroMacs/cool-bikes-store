import React, { useState } from 'react'
import ItemCard from './ItemCard'

const ItemListContainer = ({items}) => {

    const [counter, setCounter] = useState(0)
    const [stock, setStock] = useState(5)

    console.log(items);

    return (
        <div className='row'>
            <div className="col-12 m-5">
                
                {items.map(item => (
                    <ItemCard 
                        key={item.id}
                        item = {item}
                        counter = {counter}
                        setCounter = {setCounter}
                        stock = {stock}
                        setStock = {setStock}
                    />
                    ))}                
            </div>
        </div>
    )
}

export default ItemListContainer
