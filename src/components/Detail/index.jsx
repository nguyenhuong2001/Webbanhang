import React from 'react'
import './styles.scss'
const sanpham = 
    {
        SpID : 'sp1',
        TenSP : 'Dewy Glow Jelly Cream',
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
                    <p>Home</p> <span> &rarr; </span> <p>Skin Care</p> <span> &rarr; </span><p>{sanpham.TenSP}</p>
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
                        <div class = "product-brand"></div>
                            <p>{sanpham.Brand}</p>
                        <div class = "product-name">
                            <p>{sanpham.TenSP}</p>
                        </div>

                        <div class = "product-evaluation">
                        </div>

                        <div class = "product-des"> 
                            <p>{sanpham.MoTa}</p>
                        </div>

                        <div class = "product-price">
                            <p>{sanpham.GiaSP}</p>
                        </div>

                        <div class = "product-state"></div>

                        <div class = "product-number">
                            <label htmlFor="spnumber">Number: </label>
                            <input type="number" value="1" id = "spnumber"  min="0" max="10"/>
                        </div>

                        <div class = "btn-addtocart">
                                <button><i class="fas fa-shopping-cart"></i><p>ADD TO CART</p></button>
                        </div>
                    </div>

                </div>
            </div>   
            
            <div class = "hotline">
                <span><i class="fas fa-phone-volume"></i></span>
                <p><a href="">0961.710.409</a></p>
            </div>

            
        </div>
    )
}

export default Detail
