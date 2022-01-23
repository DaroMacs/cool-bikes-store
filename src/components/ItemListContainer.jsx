import React, { useEffect, useState } from 'react'
import ItemCard from './ItemCard'

const ItemListContainer = () => {

    const [products, setProducts] = useState([]);

    useEffect(async () => {
    
        try {
            const url =  "https://fakestoreapi.com/products";
            const response = await fetch(url)
            const result = await response.json()
            
            setProducts(result)

        } catch (error) {
            console.log(error);
        }
        
    
    }, []);
    

    return (
        <div className='container'>
            <div className='row mt-3'>
                {products.map(product => (
                    <ItemCard 
                        key={product.id}
                        product = {product}                        
                    />
                    ))}                
            </div>
        </div>
    )
}

export default ItemListContainer
