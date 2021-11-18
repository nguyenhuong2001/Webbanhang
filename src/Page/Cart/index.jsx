import React, { useEffect } from "react";
import Header from "./../../components/Header/index";
import Anhdep from "./../../components/AnhDep/index";
import Footer from "./../../components/Footer/index";

function Cart() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="Cart">
      <Header />
      <div className="body_Page">
        <Anhdep />
      </div>
      <Footer />
    </div>
  );
}

export default Cart;
