import React, { useState } from 'react';
import Header from "./../../components/Header/index";
import Footer from "./../../components/Footer/index";
import ViewOrderStatus from "../../components/ViewOrderStatus/index";


function OrderStatus() {
 

    return (
      <div className="OrderStatus" >         
        <Header />
        <div className="body_Page">
          <ViewOrderStatus />
        </div>
        <Footer /> 
      </div>
    )
}

export default OrderStatus
