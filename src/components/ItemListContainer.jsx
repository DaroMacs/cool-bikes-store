import React, { useState } from 'react'
import ItemCount from './ItemCount'


const ItemListContainer = () => {

    const [counter, setCounter] = useState(0)
    const [stock, setStock] = useState(5)

    return (
        <div className='row'>
            <div className="col-12 m-5">
                <ItemCount 
                    counter = {counter}
                    setCounter = {setCounter}
                    stock = {stock}
                    setStock = {setStock}
                />
            </div>
        </div>
    )
}

export default ItemListContainer
