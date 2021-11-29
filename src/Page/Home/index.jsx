import React, { useEffect } from 'react'
import Anhdep from '../../components/AnhDep'
import BestSeller from '../../components/BestSeller'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import ProductSlider from '../../components/ProductSlider'
import Slider from '../../components/Slider'
import Viewport from '../../components/Viewport'

const bestSeller = [
    
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
      },
      {
        link_img: "https://imagizer.imageshack.com/img923/7854/RmX3bd.jpg",
        title: "Augustinus Bader the Rich Cream",
        price: 170,
        SpID : 'sp2',
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
      },
      {
        link_img: "https://imagizer.imageshack.com/img924/9743/qx2lhC.jpg",
        title: "Moisture Co-Wash Whipped Cleansing Conditioner",
        price: 307,
        SpID : 'sp3',
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
      },
      {
        link_img: "https://imagizer.imageshack.com/img922/9882/qhXgmH.jpg",
        title: "Royal Oils Deep Moisture Masque",
        price: 339,
        SpID : 'sp4',
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
      },
      {
        link_img: "https://imagizer.imageshack.com/img924/2301/D5Qpr4.jpg",
        title: "Inforcer Brush Proof Anti-Breakage Detangling ",
        price: 80,
        SpID : 'sp5',
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
      },
      {
        link_img: "https://imagizer.imageshack.com/img923/8624/ssAUCe.jpg",
        title: "Bain Densifique Shampoo and Conditioner",
        price: 310,
        SpID : 'sp6',
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
      },
      {
        link_img: "https://imagizer.imageshack.com/img924/9255/KbBM3Z.jpg",
        title: "Keratin Smooth Color Shampoo and Conditioner",
        price: 99,
        SpID : 'sp7',
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
      },
    ];
    const List_Img = [
        { img: "https://imagizer.imageshack.com/img922/2549/B2zMSB.jpg" },
        { img: "https://imagizer.imageshack.com/img923/9061/9ZFZH7.jpg" },
        { img: "https://imagizer.imageshack.com/img924/6814/H2oqYZ.jpg" },
        
    ];
    const Img_Viewport = "https://imagizer.imageshack.com/img922/3648/9js3Jx.jpg"; //img viewport
    

function Home() {
  
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <div className="Home">
            <Header/>
            <div className="body_Page">
                 <Slider List_Img={List_Img}/>
                 <div className="latest">
                     <h2 className="title_pro ">LATEST PRODUCT</h2>
                        <ProductSlider />
                 </div>

                 <Viewport Img_Viewport={Img_Viewport}/>
                 
                 <h2 className="title_pro">BEST SELLER</h2>
                 <BestSeller Listproduct={bestSeller}/>
                 <Anhdep/>
            </div>
            
           <Footer/>
        </div>
    )
}

export default Home
