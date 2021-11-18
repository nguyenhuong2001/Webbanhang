import React, { useEffect } from "react";
import BestSeller from "../../components/BestSeller";
import Header from "./../../components/Header/index";
import Slider from "./../../components/Slider/index";
import Anhdep from "./../../components/AnhDep/index";
import Footer from "./../../components/Footer/index";
const skinCare = [
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
  {
    img: "https://media.allure.com/photos/60512685fdf3d7fd0e2ef100/2:1/w_3500,h_1750,c_limit/asian-owned%20skin%20care%20lede.jpg",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0059/0056/6597/products/photo-id-6571435229253-attractive-woman-kissing-a-natural-skincare-product.jpg?v=1618162858",
  },
  {
    img: "https://images.pexels.com/photos/5938255/pexels-photo-5938255.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=1040",
  },
];
function SkinCare() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="SkinCare">
      <Header />
      <div className="body_Page">
        <Slider List_Img={List_Img} />
        <h2 className="title_pro">SKIN CARE</h2>
        <BestSeller Listproduct={skinCare} />
        <Anhdep />
      </div>
      <Footer />
    </div>
  );
}

export default SkinCare;
