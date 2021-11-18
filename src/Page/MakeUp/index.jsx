import React, { useEffect } from "react";
import Header from "./../../components/Header/index";
import Anhdep from "./../../components/AnhDep/index";
import Slider from './../../components/Slider/index';
import BestSeller from './../../components/BestSeller/index';
import Footer from "./../../components/Footer/index";
const hairCare = [
  {
    link_img:
      "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1566854276-71kbb2hyo3l-sl1500-1566854261.jpg?crop=0.886xw:1xh;center,top&resize=768:*",
    title: "Keratin Smooth Color Shampoo and Conditioner",
    price: 99,
    SpID : 'sp1',
    TenSP : 'Dewy  Glow  Jelly  Cream',
    Photo : [
         'https://imageshack.com/i/pobSYDAvp',
         'https://imageshack.com/i/pmhgVVmFj',
         'https://imageshack.com/i/pop7krFyj',
         'https://imageshack.com/i/pohj5JTpj',
        
    ] ,
    MoTa : 'Jeju Cherry Blossom helps boost skin radiance. Infused with Betaine, a moisturizing ingredient derived from sugar beets that creates a protective layer to prevent hydration loss. Jelly texture absorbs instantly into skin without any sticky residue ',
    GiaSP : '$25',
    SL : 11 ,
    Brand : 'innisfree',
    ThanhPhan : 'Animal-Originated Ingredients. mineral oil, polyacrylamides, imidazolidinyl urea, triethanolamine, silicone oil, artificial fragrances, synthetic Colorants.'
  }
];
const List_Img = [
  {    img: "https://images.pexels.com/photos/457701/pexels-photo-457701.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1050"},
  {
    img: "https://images.pexels.com/photos/6393/red-woman-girl-brown.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    img: "https://images.pexels.com/photos/247287/pexels-photo-247287.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=1040",
  },
];
function Makeup() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="Makeup">
      <Header />
      <div className="body_Page">
        <Slider List_Img={List_Img} />
        <h2 className="title_pro">MAKE UP </h2>
        <BestSeller Listproduct={hairCare} />
        <Anhdep />
      </div>
      <Footer />
    </div>
  );
}

export default Makeup;
