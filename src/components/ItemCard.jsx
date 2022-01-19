import React from 'react';
import ItemCount from './ItemCount';

const ItemCard = ({counter, setCounter, stock, setStock, item}) => {
  return (

    <div className='container'>
        <div className="row">
        <div className="col-6">
                <div className="card mt-3">
                <div className="card-body">
                <h6>{`{{{Image Here ${item.image}}}}`}</h6>
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <h6>{item.price}</h6>
                    <div className="container p-0">
                        <div className='col-12'>
                            <div className="">

                        <ItemCount 
                            counter = {counter}
                            setCounter = {setCounter}
                            stock = {stock}
                            setStock = {setStock}
                        />
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>

  ) 
};

export default ItemCard;
