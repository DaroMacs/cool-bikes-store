import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='container'>
        <div className='row'>
            <div className="col">
                <h2 className='text-center mt-5'>Welcome to our store</h2>
                <p className='mt-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora repellat iste id iusto, pariatur a architecto? Repellendus magnam rerum corporis magni asperiores fuga eligendi veniam inventore suscipit! Debitis, est accusantium.</p>
            </div>
            <div className="d-flex justify-content-center">
                <Link aria-current="page" to='/products'><button type="button" className="btn btn-primary">Products</button></Link>
            </div>
        </div>    
    </div>

  )};

export default Home;