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
    {    img: "https://nylonpink.tv/wp-content/uploads/2017/03/The-Best-Korean-Body-skincare-Products.jpg "},
    {
      img: "https://images.pexels.com/photos/3618606/pexels-photo-3618606.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=1040",
    },
    {
      img: "https://images.pexels.com/photos/7262986/pexels-photo-7262986.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1000",
    },
  ];
function BodyCare() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="BodyCare">
       <Header />
      <div className="body_Page">
        <Slider List_Img={List_Img} />
        <h2 className="title_pro">BODY CARE</h2>
        <BestSeller Listproduct={hairCare} />
        <Anhdep />
      </div>
      <Footer />
    </div>
  );
}

export default BodyCare;
