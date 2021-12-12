import React, { useContext, useEffect} from 'react'
import './styles.scss'
import { Link, useParams } from 'react-router-dom'
import Evaluation from '../Evaluation'
import { Couter } from '../../Context/counter'
import { getProductId } from '../../api/ApiResult'
import { useState } from 'react'


function Detail() { 
    const photo={
        PhotoMain:"https://tse4.mm.bing.net/th?id=OIP.ZCAZ529iPAyXEn1BJkpWqQHaJQ&pid=Api&P=0&w=300&h=300",
        PhotoList:[
            {photo:"https://tse4.mm.bing.net/th?id=OIP.ZCAZ529iPAyXEn1BJkpWqQHaJQ&pid=Api&P=0&w=300&h=300"},
           {photo:"https://tse4.mm.bing.net/th?id=OIP.ZCAZ529iPAyXEn1BJkpWqQHaJQ&pid=Api&P=0&w=300&h=300"},
        ]
    }
    const [productDetail , setProductDetail]=useState();
    const {setCountPro} =useContext(Couter);
    const {id}=useParams();
    useEffect(async() =>{
      const product= await getProductId(id);//day la data tra ve
      
      setProductDetail({...product,Photo:JSON.parse(product.Photo)})// cai dat du kieu vao productID
      console.log(productDetail)
    },[])
    
    const addToCart = () => {
        const Product ={...productDetail,SL: document.getElementById('spnumber').value*1}
        if (JSON.parse(localStorage.getItem('ListProduct'))){
            var product = JSON.parse(localStorage.getItem('ListProduct'))
            var flag = false

           product= product.map(function(item){
              if (item.SpID=== Product.SpID) {
                  item = {...item, SL : item.SL*1 +Product.SL}
                  flag = true;
                  return item;

              } 
              return item
            })
            console.log(flag);
            if (!flag){
                localStorage.setItem('ListProduct', JSON.stringify([...product,Product]))
                setCountPro(JSON.parse(localStorage.getItem('ListProduct')).length)
            }
            else{
                localStorage.setItem('ListProduct', JSON.stringify([...product]))
            }
            
        }
        else{
            
            localStorage.setItem('ListProduct', JSON.stringify([Product]))
            setCountPro(JSON.parse(localStorage.getItem('ListProduct')).length)
        }
    }
    return (
        <div className = "Detail">
            <div className = "product">
                <div className = "product-top">
                    <p><Link className="Home" to="../../"style={{textDecoration:'none',color:'#8e8686'}}> Home </Link></p> 
                    <span> &rarr; </span>
                    <p><Link className="SkinCare" to="../../skincare"style={{textDecoration:'none',color:'#8e8686'}}> SkinCare </Link></p> 
                    <span> &rarr; </span><p style={{color:'#8e8686'}}>{productDetail?.TenSP}</p>
                </div>

                <div className = "product-content">
                    <div className = "product-content-left">
                        <div className = "image-main">
                            <img src={`${productDetail?.Photo?.PhotoMain}`} alt="" />
                        </div>
                        <div className = "image-sub">
                            &lt;
                            {productDetail?.Photo?.PhotoList?.map(item => 
                                <img src={`${item.photo}`} alt="" />
                            )}
                        
                    
                            &gt;
                        </div>  
                    </div>
                    <div className = "product-content-right">
                        <div className = "product-brand">
                            <p><b>Brand: {productDetail?.Brand}</b></p>
                        </div>   
                        <div className = "product-name">
                            <h3>{productDetail?.TenSP}</h3>
                        </div>
                        <div className = "product-evaluation">



                        </div>
                        <div className = "product-des"> 
                            <p>{productDetail?.MoTa}</p>
                        </div>
                        <div className = "product-rest">
                            <div className = "product-price">
                                <h1>{productDetail?.GiaSP}</h1>
                                <p>Free shipping with $50+</p>
                            </div>
                            <div className = "product-number">
                                <label htmlFor="spnumber">Number: </label>
                                <select name="spnumber" id = "spnumber">
                                    <option value= "1" >1</option>
                                    <option value= "2" >2</option>
                                    <option value= "3" >3</option>
                                    <option value= "4" >4</option>
                                    <option value= "5" >5</option>
                                    <option value= "6" >6</option>
                                    <option value= "7" >7</option>
                                    <option value= "8" >8</option>
                                    <option value= "9" >9</option>
                                    <option value= "10">10</option>
                                </select>
                            </div>
                            <div className = "product-state">
                                <p>Stocking</p>
                            </div>
                        </div>

                        <div className = "btn-addtocart">
                            <Link className="Cart" to="../../Cart"style={{textDecoration:'none',color:'#ffff'}}>
                                <button><i className="fad fa-money-bill-alt"></i>
                                    <span>BUY</span>
                                </button>
                            </Link>
                            <button onClick = {addToCart}><i className="fas fa-shopping-cart"></i><span>ADD TO CART</span></button>
                        </div>
                        <div className ="hr-point">
                            <hr /><br /><p>BUY THIS AND EARN 75 POINTS</p><br /><hr />
                        </div>
                        <div className = "product-hotline">
                            <h4>Hotline: </h4>
                            <span><i className="fas fa-phone-volume"></i>
                                <Link className="Home" to="../../contact"style={{textDecoration:'none'}}> 0961. 710. 409 </Link>
                            </span>
                            
                        </div>
                    </div>
                </div>
            </div> 
            <Evaluation />     
        </div>
    )
}

export default Detail
