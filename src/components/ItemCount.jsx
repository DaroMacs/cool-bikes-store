import React from 'react'

const ItemCount = ({counter, setCounter, stock, setStock}) => {

    const handleAdd = () => {
        if(stock === 0 ){
            alert('There is no more stock!')
            return
        }
        setCounter( counter + 1)
        setStock(stock - 1)
    }
    
    const handleSubtract = () => {
       
        setCounter( counter - 1)
        setStock(stock + 1)
    }

    return (
        <div className="container p-0">       
            <div className='row col-12 m-0'>
                <div className='d-flex align-items-center justify-content-center'>
                    <button 
                    type='button' 
                    className='btn btn-danger btn-sm me-1'
                    onClick={() => handleSubtract()}
                    disabled = {counter === 0}
                    >
                    -
                    </button>
                    <h4 className='mb-0 px-4 border rounded'>{counter}</h4>
                    <button 
                        type='button' 
                        className='btn btn-warning btn-sm ms-1'
                        onClick={() => handleAdd()}
                    >
                    +
                    </button>
                </div>
            </div>             
                <div className="row text-center">
                    <h6 className='p-0 m-0 pt-2'>{`Available Stock ${stock}`}</h6>
                </div>
        </div>
    )
}

export default ItemCount