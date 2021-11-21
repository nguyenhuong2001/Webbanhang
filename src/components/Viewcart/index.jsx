import React from 'react'
import "./styles.scss"

function Viewcart() {
    const Listproduct = JSON.parse(localStorage.getItem('ListProduct'))? JSON.parse(localStorage.getItem('ListProduct')) :[];
    console.log(Listproduct)
    return (
        <div className="Viewcart">
        {
            Listproduct.map(item=>
                <div className="Viewcart-item">
                    <div className="Viewcart-img"><img src={`${item.Photo[0]}`} alt="" /></div>
                    <div className="Viewcart-name">{item.title}</div>
                    <div className="Viewcart-price">&#36;{item.price}</div>
                </div>
        )}
        </div>
    )
}

export default Viewcart
