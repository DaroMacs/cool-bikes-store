import React, { useState } from 'react';
import ItemCount from './ItemCount';
import '../styles/ItemCard.css'
import { useNavigate } from 'react-router-dom';

const ItemCard = ({product}) => {

    const navigate = useNavigate()

    const [counter, setCounter] = useState(0)
    const [stock, setStock] = useState(5)
    return (

      <div className="col-lg-4">
                <div className="card mt-3 border-dark">
                    <div className="card-body">
                        <img className="rounded mx-auto d-block" src={product.image} width={200} height={200} />
                        <h5 className="card-title title pt-4 text-center">{product.title}</h5>
                        <p className="card-text summary pt-2">{product.description}</p>
                        <h5 className='text-center pb-2'>${product.price}</h5>
                        <ItemCount 
                            counter = {counter}
                            setCounter = {setCounter}
                            stock = {stock}
                            setStock = {setStock}
                        />
                        <div className="d-flex justify-content-center pt-2 ">
                            <button type='button' className='btn btn-primary' onClick={() => navigate(`/products/${product.id}`)}>Detail</button>              
                        </div>
                    </div>
                </div>
            </div>
  ) 
};

export default ItemCard;
