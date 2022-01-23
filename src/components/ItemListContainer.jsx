import React, { useEffect, useState } from 'react'
import ItemCard from './ItemCard'
import Spinner from './Spinner';

const ItemListContainer = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(async () => {
    
        try {
            const url =  "https://fakestoreapi.com/products";
            const response = await fetch(url)
            const result = await response.json()
            
            setProducts(result)

        } catch (error) {
            console.log(error);
        }
        setTimeout(() => {
                
            setLoading(!loading)
        }, 0);
    
    }, []);
    

    return (
        loading ? <Spinner /> :
        Object.keys(products).length === 0 ? <p>There are no results.</p> : 
            
            (
        <div className='container'>
            <div className='row m-5'>
            <h2 className='text-center'>Products List</h2>
                {products.map(product => (
                    <ItemCard 
                        key={product.id}
                        product = {product}                        
                    />
                    ))}                
            </div>
        </div>
    )
    )
}

export default ItemListContainer
