import React, { useContext} from 'react'
import './styles.scss'
import { Link } from 'react-router-dom'
import Evaluation from '../Evaluation'
import { Couter } from '../../Context/counter'


function Detail() { 
    const {setCountPro,productDetail} =useContext(Couter);
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
            <div class = "product">
                <div class = "product-top">
                    <p><Link className="Home" to="../../"style={{textDecoration:'none',color:'#8e8686'}}> Home </Link></p> 
                    <span> &rarr; </span>
                    <p><Link className="SkinCare" to="../../skincare"style={{textDecoration:'none',color:'#8e8686'}}> SkinCare </Link></p> 
                    <span> &rarr; </span><p style={{color:'#8e8686'}}>{productDetail?.TenSP}</p>
                </div>

                <div class = "product-content">
                    <div class = "product-content-left">
                        <div class = "image-main">
                            <img src={productDetail?.link_img} alt="" />
                        </div>
                        <div class = "image-sub">
                            &lt;
                            {productDetail?.Photo.map(item => 
                                <img src={`${item}`} alt="" />
                            )}
                            &gt;
                        </div>  
                    </div>
                    <div class = "product-content-right">
                        <div class = "product-brand">
                            <p><b>Brand: {productDetail?.Brand}</b></p>
                        </div>   
                        <div class = "product-name">
                            <h3>{productDetail?.TenSP}</h3>
                        </div>
                        <div class = "product-evaluation">



                        </div>
                        <div class = "product-des"> 
                            <p>{productDetail?.MoTa}</p>
                        </div>
                        <div class = "product-rest">
                            <div class = "product-price">
                                <h1>{productDetail?.GiaSP}</h1>
                                <p>Free shipping with $50+</p>
                            </div>
                            <div class = "product-number">
                                <label for="spnumber">Number: </label>
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
                            <div class = "product-state">
                                <p>Stocking</p>
                            </div>
                        </div>

                        <div class = "btn-addtocart">
                            <Link className="Cart" to="../../Cart"style={{textDecoration:'none',color:'#ffff'}}>
                                <button><i class="fad fa-money-bill-alt"></i>
                                    <span>BUY</span>
                                </button>
                            </Link>
                            <button onClick = {addToCart}><i class="fas fa-shopping-cart"></i><span>ADD TO CART</span></button>
                        </div>
                        <div class ="hr-point">
                            <hr /><br /><p>BUY THIS AND EARN 75 POINTS</p><br /><hr />
                        </div>
                        <div class = "product-hotline">
                            <h4>Hotline: </h4>
                            <span><i class="fas fa-phone-volume"></i>
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
