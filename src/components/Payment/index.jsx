import React from 'react'
import './styles.scss'

function Payment() {
    const Listproduct = JSON.parse(localStorage.getItem('ListProduct'))? JSON.parse(localStorage.getItem('ListProduct')) :[];
    console.log(Listproduct)
    return (
        <div className="Payment">
            {
                Listproduct.map(item=><p>{item.SpID}</p>)
            }
        </div>
    )
}

export default Payment
