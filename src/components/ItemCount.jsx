import React from 'react'

const ItemCount = ({counter, setCounter, stock, setStock}) => {

    const handleAdd = () => {
        if(stock === 0 ){
            alert('There is no more stock!')
            return
        }
        setCounter( counter + 1)
        setStock(stock - 1)
        // console.log(counter, stock);
    }
    
    const handleSubtract = () => {
       
        setCounter( counter - 1)
        setStock(stock + 1)
    }
    console.log(counter, stock);

    return (
        <div className="container p-0">
       
        <div className='row col-12'>
            <div className='d-flex align-items-center justify-content-right'>
                <button 
                type='button' 
                className='btn btn-danger btn-sm'
                onClick={() => handleSubtract()}
                disabled = {counter === 0}
                >
                -
                </button>
                <h2 className='mb-0 px-4 border'>{counter}</h2>
                <button 
                    type='button' 
                    className='btn btn-warning btn-sm'
                    onClick={() => handleAdd()}
                >
                +
                </button>
            </div>
            <div className="container">
                <h4 className='p-0 m-0 pt-2'>{`Available Stock ${stock}`}</h4>
            </div>
        </div>
             
        </div>
    )
}

export default ItemCount