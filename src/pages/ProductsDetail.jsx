import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ItemCard from '../components/ItemCard';

const ProductsDetail = () => {

  const {id} = useParams()
  const navigate = useNavigate()

  console.log(useParams());

  const [product, setProduct] = useState([]);
  
  useEffect(async () => {
    
    try {
        const url =  `https://fakestoreapi.com/products/${id}`;
        const response = await fetch(url)
        const result = await response.json()
        
        setProduct(result)

    } catch (error) {
        console.log(error);
    }
}, []);

  return (
    <>
    {product?.title ? (
      <div className="container">
      <div className="row">
        <div className="d-flex justify-content-center col">
              <div className="col-lg-4">
                  <div className="card mt-3 border-dark">
                      <div className="card-body">
                          <img className="rounded mx-auto d-block" src={product.image} width={200} height={200} />
                          <h5 className="card-title pt-4 text-center">{product.title}</h5>
                          <p className="card-text pt-2">{product.description}</p>
                          <h5 className='text-center pb-2'>${product.price}</h5>
                          <div className="d-flex justify-content-center pt-2 ">
                              <button type='button' className='btn btn-primary' onClick={() => navigate(`/products`)}>Return</button>              
                          </div>
                      </div>
                  </div>
              </div>
        </div>
      </div>
    </div>
  ): (
    <div className='container'>
      <div className='row'>
          <div className="col d-flex justify-content-center align-items-center">
              <h2 className='text-center mt-5'>Product is not in stock :(</h2>
          </div>
      </div>    
    </div>
  )}    
    </>
  )
};

export default ProductsDetail;