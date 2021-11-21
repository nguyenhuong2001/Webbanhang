import React from 'react'
import './styles.scss'

function Payment() {
    const Listproduct = JSON.parse(localStorage.getItem('ListProduct'))? JSON.parse(localStorage.getItem('ListProduct')) :[];
    console.log(Listproduct)
    return (
        <div className="Payment">
            <div className="Payment-title">
                <img src="" alt="" />
                <p>Order Confirmation</p>
            </div>
            <div className="Payment-content">
                <div className="Payment-content-left"></div>
                
                <div className="Payment-content-right">
                    <div className="Payment_right-title">
                        <button>Back to buy</button>
                    </div>
                    <div className="Payment_right-list">
                    {
                        Listproduct.map(item=><p>{item.SpID}</p>)
                    }   
                    </div>
                    <div className = "Payment_right-total">
                        <div className="btn-total"><button>To Order</button></div>
                    </div>
                    <div className = "Remove-all"></div>
                    
                </div>
            </div>
            
        </div>
    )
}

export default Payment
