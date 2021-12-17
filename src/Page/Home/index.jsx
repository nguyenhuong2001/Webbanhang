import React, { useEffect } from 'react'
import { getUser } from '../../api/ApiResult'
import Anhdep from '../../components/AnhDep'
import BeautyClub from '../../components/BeautyClub'
import BestSeller from '../../components/BestSeller'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import ProductSlider from '../../components/ProductSlider'
import Slider from '../../components/Slider'
import Viewport from '../../components/Viewport'
import { useState } from "react";
import { getBestSeller } from "../../api/ApiResult";


    const List_Img = [
        { img: "https://imagizer.imageshack.com/img922/2549/B2zMSB.jpg" },
        { img: "https://imagizer.imageshack.com/img923/9061/9ZFZH7.jpg" },
        { img: "https://imagizer.imageshack.com/img924/6814/H2oqYZ.jpg" },
        
    ];
    const Img_Viewport = "https://imagizer.imageshack.com/img922/3648/9js3Jx.jpg"; //img viewport
    
    const beautyClubBlog = [
      {
        "id": 1,
        "srcimg": "https://imagizer.imageshack.com/img924/1549/uF6AZs.jpg",
        "name": "FALL-ING FOR YOU — BEAUTY TRENDS WE'RE OBSESSING OVER", 
        "date": "SEPTEMBER 12, 2021"
      },
      {
        "id": 2,
        "srcimg": "https://imagizer.imageshack.com/img923/8461/FR3zOB.jpg",
        "name": "ROUTINE REBEL — BEAUTY TIPS", 
        "date": "MAY 29, 2021"
      },
      {
        "id": 3,
        "srcimg": "https://imagizer.imageshack.com/img924/1816/XfWXNS.jpg",
        "name": "BEAUTY BUYS — MUST-HAVES IN YOUR BAG THIS FALL", 
        "date": "APRIL 19, 2021"
      },
    ];

function Home() {
  const [listBestSeller,setListBestSeller] =useState([])
  useEffect(async () => {
    const res = await getBestSeller();
    if(res)
    setListBestSeller(res)
    window.scrollTo(0, 0);
  }, []);
  const fectchData = async() =>{
    const res= await getBestSeller();
    setListBestSeller(res)
  }
  const getValue = (e) => {
    if(e === '') return fectchData();
    const listProduct = listBestSeller.filter((item) =>{
      return (
        item?.TenSP.toString().toLowerCase().indexOf(e.toLowerCase()) > -1
      )
    })
    setListBestSeller(listProduct)
  }

    return (
        <div className="Home">
             <Header searchHandle = {getValue} listAllProduct={listBestSeller} />
            <div className="body_Page">
                 <Slider List_Img={List_Img}/>
                 <div className="latest">
                     <h2 className="title_pro ">LATEST PRODUCT</h2>
                        <ProductSlider />
                 </div>

                 <Viewport Img_Viewport={Img_Viewport}/>
                 
                 <h2 className="title_pro">BEST SELLER</h2>
                 <BestSeller Listproduct={listBestSeller}/>
                 <Anhdep/>
                 <h2 className="title_pro">BEAUTY CLUB BLOG</h2>
                 <BeautyClub beautyClubBlog={beautyClubBlog}/>
            </div>
            
           <Footer/>
        </div>
    )
}

export default Home
