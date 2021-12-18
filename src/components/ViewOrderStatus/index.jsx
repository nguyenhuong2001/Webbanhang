
import React, { useState } from 'react';

import './styles.scss';

const listOrder = [
  {
    id: "1",
    img: "https://imagizer.imageshack.com/img922/4732/R0aCZq.jpg",
    nameProduct: "Natural Ingredients",
    price: "10.00$",
    status: "Deliveried",
    dateBuy: "18-12-2021",
    quantity: "2"
  },
  {
    id: "2",
    img: "https://imagizer.imageshack.com/img922/4732/R0aCZq.jpg",
    nameProduct: "Natural Ingredients",
    price: "19.00$",
    status: "Sending",
    dateBuy: "17-12-2021",
    quantity: "4"
  },
  {
    id: "3",
    img: "https://imagizer.imageshack.com/img922/4732/R0aCZq.jpg",
    nameProduct: "Natural Ingredients",
    price: "16.00$",
    status: "Deliveried",
    dateBuy: "19-12-2021",
    quantity: "1"
  },
  {
    id: "4",
    img: "https://imagizer.imageshack.com/img922/4732/R0aCZq.jpg",
    nameProduct: "Natural Ingredients",
    price: "11.00$",
    status: "Sending",
    dateBuy: "14-12-2021",
    quantity: "1"
  },
  {
    id: "5",
    img: "https://imagizer.imageshack.com/img922/4732/R0aCZq.jpg",
    nameProduct: "Natural Ingredients",
    price: "15.00$",
    status: "Sending",
    dateBuy: "11-12-2021",
    quantity: "1"
  },
  {
    id: "6",
    img: "https://imagizer.imageshack.com/img922/4732/R0aCZq.jpg",
    nameProduct: "Natural Ingredients",
    price: "15.00$",
    status: "Sending",
    dateBuy: "11-12-2021",
    quantity: "1"
  },
  {
    id: "7",
    img: "https://imagizer.imageshack.com/img922/4732/R0aCZq.jpg",
    nameProduct: "Natural Ingredients",
    price: "15.00$",
    status: "Sending",
    dateBuy: "11-12-2021",
    quantity: "1"
  },

]
function ViewOrderStatus() {

  return (
    <div className="ViewOrderStatus" >
      <h2>List Order</h2>
      {listOrder.map((item, index) => {
        return (
          <div className={`orderView orderView${index}`}>
            <div className="content">
              <div className="imgProduct">
                <img src={item.img} alt="" />
              </div>
              <div className="infoProduct">
                <div className="name">
                  <span>{item.nameProduct}</span>
                </div>
                <div className="quantity">
                  <span>x{item.quantity}</span>
                </div>
                <div className="status">
                  <span className={`${item.status}`}>{item.status}</span>
                </div>
              </div>

            </div>
            <div className="price">
              <span>{item.price}</span>
            </div>
          </div>
        )
      })}
      
        
    </div>
  )

}

export default ViewOrderStatus
