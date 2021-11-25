import React from 'react'
import './styles.scss'

function Payment() {
    const Listproduct = JSON.parse(localStorage.getItem('ListProduct'))? JSON.parse(localStorage.getItem('ListProduct')) :[];
    console.log(Listproduct)
    return (
        <div className="Payment">
            <div className="Payment-title">
                <img src="https://minio.thecoffeehouse.com/images/tch-web-order/Delivery2.png" alt="image shipper" />
                <p>Order Confirmation</p>
            </div>
            <div className="Payment-content">
                <div div className="Payment-content-left">
                    <form action="" method="">
                        <div className="left-form">
                            <h3>Please choose a shipping address</h3>
                            <div className="row">
                                <div className="column">
                                    <p>Full Name <span>*</span></p>
                                    <input type="text" placeholder value="" name = "customer_name"/>
                                </div>
                                <div className="column">
                                    <p>Phone <span>*</span></p>
                                    <input type="text" placeholder value="" name = "customer_phone"/>
                                </div>
                            </div>
                            <div className="row">
                                <p>Address <span>*</span></p>
                                <input type="text" placeholder value="" name = "customer_address"/>  
                            </div>
                            <div className="row">
                                <p>Note </p>
                                <input type="text" placeholder value="" name = "customer_note"/>
                            </div>
                        </div>
                        <div className="left-pay">
                            <h3>Payment Method</h3>
                            <div className="checkpay">
                                <input type="radio" name="pay" id="cash"/>
                                <label for="cash">
                                    <img src="https://minio.thecoffeehouse.com/image/tchmobileapp/1000_photo_2021-04-06_11-17-08.jpg" alt=""/>
                                    <span>Cash</span>
                                </label>
                            </div>
                            <div className="checkpay">
                                <input type="radio" name="pay" id="momo"/>
                                <label for="momo">
                                    <img src="https://minio.thecoffeehouse.com/image/tchmobileapp/386_ic_momo@3x.png" alt=""/>
                                    <span>MoMo</span>
                                </label>
                            </div>
                            <div className="checkpay">
                                <input type="radio" name="pay" id="zalopay"/>
                                <label for="zalopay">
                                    <img src="https://minio.thecoffeehouse.com/image/tchmobileapp/388_ic_zalo@3x.png" alt=""/>
                                    <span>ZaloPay</span>
                                </label>
                            </div>
                            <div className="checkpay">
                                <input type="radio" name="pay" id="shopeepay"/>
                                <label for="shopeepay">
                                    <img src="https://minio.thecoffeehouse.com/image/tchmobileapp/1120_1119_ShopeePay-Horizontal2_O.png" alt=""/>
                                    <span>ShopeePay</span>
                                </label>
                            </div>
                        </div>
                        <div className="left-argee">
                            <input type="checkbox" name="" id=""/>
                            <span>  I agree to ENVY's terms and  <span><a href="">conditions of purchase</a> .</span>
                            </span>
                        </div>
                    </form>
                </div>
                <div className="Payment-content-right">
                    <div className="Payment_right-title">
                        <div className="title-text">
                            <p>Selected products</p>
                        </div>
                        <div className="title-btn">
                            <button>Back to buy</button>
                        </div>
                        
                    </div><hr />
                    <div className="Payment_right-list">
                    {
                        Listproduct.map(item=><p>{item.SpID}</p>)
                    }   
                    </div><hr />
                    <div className = "Payment_right-total">
                        <div className="total-money">
                            <p> Total money</p>
                            <p>100$</p>
                        </div>
                        <div className="btn-total"><button>To Order</button></div>
                    </div>
                    <div className = "Remove-all">
                        <p>Remove all</p>
                    </div>
                    
                </div>
            </div>
            
        </div>
    )
}
export default Payment
