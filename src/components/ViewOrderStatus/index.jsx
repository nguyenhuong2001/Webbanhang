
import React, { useState, useEffect } from 'react';
import { getOrder } from '../../api/paymentApi';
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
//   const [dataFrom,setDataForm]=useState({
//     FullName:'',
//     Phone:'',
//     Address:'',
//     Username:'',
//     Note:'',
//     Mothod:'',
//   });
//   const handleOnchange=(e)=>{ setDataForm({...dataFrom,[e.target.name]:e.target.value})}
const [listOrder,setListOrder] =useState([])
useEffect(async () => {
  const Order = await getOrder();
  
  console.log(Order)
  //setListOrder({ ...listOrder, Photo: JSON.parse(listOrder.Photo) });
  setListOrder(Order);
  console.log(listOrder)
  // window.scrollTo(0, 0);
}, []);

// useEffect(async () => {
//   const res = await getOrder(); //day la data tra ve

//   setListOrder({ ...res, Photo: JSON.parse(res.Photo) }); // cai dat du kieu vao productID
//   console.log(listOrder);
// }, []);

  return (
    <div className="ViewOrderStatus" >
      <h2>List Order</h2>
      {listOrder.map((item, index) => {
        return (
          <div className={`orderView orderView${index}`}>
            <div className="content">
              <div className="imgProduct">
               <img src={JSON.parse(item.Photo).PhotoMain} alt="" />
              </div>
              <div className="infoProduct">
                <div className="name">
                  <span>{item.TenSP}</span>
                </div>
                <div className="quantity">
                  <span>x{item.SL}</span>
                </div>
                <div className="status">
                  <span className={`${item.Trangthai}`}>{item.Trangthai}</span>
                </div>
              </div>

            </div>
            <div className="price">
              <span>${item.GiaSP}</span>
            </div>
          </div>
        )
      })}
             
    </div>
  )

}

export default ViewOrderStatus
