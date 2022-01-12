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
        <div className='row'>
            <div className='col-2 d-flex align-items-center justify-content-center'>
                <button 
                type='button' 
                className='btn btn-danger btn-sm'
                onClick={() => handleSubtract()}
                disabled = {counter === 0}
                >
                -1
                </button>
                <h2 className='mb-0 px-4 border'>{counter}</h2>
                <button 
                    type='button' 
                    className='btn btn-warning btn-sm'
                    onClick={() => handleAdd()}
                >
                +1
                </button>
            </div>
            <div className="row">
                <h4 className='pt-2'>{`Available Stock ${stock}`}</h4>
            </div>
        </div>
    )
}

export default ItemCount