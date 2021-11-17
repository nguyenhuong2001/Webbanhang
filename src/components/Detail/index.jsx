import React from 'react'
import './styles.scss'
import { Link } from 'react-router-dom'
import Evaluation from '../Evaluation'
const sanpham = 
    {
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
        SL : '11' ,
        Brand : 'innisfree',
    }



function Detail() {
    return (
        <div className = "Detail">
            <div class = "product">
                <div class = "product-top">
                    <p><Link className="Home" to="../../"style={{textDecoration:'none',color:'#8e8686'}}> Home </Link></p> 
                    <span> &rarr; </span>
                    <p><Link className="SkinCare" to="../../skincare"style={{textDecoration:'none',color:'#8e8686'}}> SkinCare </Link></p> 
                    <span> &rarr; </span><p style={{color:'#8e8686'}}>{sanpham.TenSP}</p>
                </div>

                <div class = "product-content">
                    <div class = "product-content-left">
                        <div class = "image-main">
                            <img src={`${sanpham.Photo[0]}`} alt="" />
                        </div>
                        <div class = "image-sub">
                            {sanpham.Photo.map(item => 
                                <img src={`${item}`} alt="" />
                            )}
                        </div>  
                    </div>
                    <div class = "product-content-right">
                        <div class = "product-brand">
                            <p><b>Brand: {sanpham.Brand}</b></p>
                        </div>   
                        <div class = "product-name">
                            <h3>{sanpham.TenSP}</h3>
                        </div>
                        <div class = "product-evaluation">



                        </div>
                        <div class = "product-des"> 
                            <p>{sanpham.MoTa}</p>
                        </div>
                        <div class = "product-rest">
                            <div class = "product-price">
                                <h1>{sanpham.GiaSP}</h1>
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
                            <button><i class="fad fa-money-bill-alt"></i><span> BUY </span></button>
                            <button><i class="fas fa-shopping-cart"></i><span>ADD TO CART</span></button>
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
