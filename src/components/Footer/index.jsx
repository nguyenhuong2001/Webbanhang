import React from 'react'
import "./styles.scss"

function Footer() {
    return (
        <div className ="footer">
                <div class="container">
                <form class="form">
                    <input type="email" class="form__field" placeholder="   Subscribe Email" />
                    <button type="button" class="btn btn--primary  uppercase">Submit</button>
                </form>
                <div class="noidung">
                    <div class="noi-dung about">
                        <h2>ABOUT US</h2>
                        <ul class="link">
                            <li><a href="#">Introduce about the company</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">Blog</a></li>
                        </ul>
                    
                        <ul class="social-icon">
                                <li><a href=""><i class="fab fa-facebook"></i></a></li>
                                <li><a href=""><i class="fab fa-instagram"></i></a></li>
                                <li><a href=""><i class="fab fa-twitter"></i></a></li>
                                <li><a href=""><i class="fab fa-youtube"></i></a></li>
                        </ul>
                    </div>
                    
                    <div class="noi-dung links">
                        <h2>PRODUCT</h2>
                        <ul>
                            <li><a href="#">Home page</a></li>
                            <li><a href="#">Best Seller</a></li>
                            <li><a href="#">Latest Product</a></li>
                            <li><a href="#">Reduce Product</a></li>
                        </ul>
                    </div>
                   
                    <div class="noi-dung contact">
                        <h2>CONTACT INFO</h2>
                        <ul class="info">
                            <li>
                                <span><i class="fa fa-map-marker"></i></span>
                                <span>Street 6<br />
                                    Linh Trung Ward, Thu Duc City<br />
                                    Viet Nam</span>
                            </li>
                            <li>
                                <span><i class="fa fa-phone"></i></span>
                                <p><a href="#">+84 918 743 787</a>
                                    <br />
                                    <a href="#">+84 961 710 409</a></p>
                            </li>
                            <li>
                                <span><i class="fa fa-envelope"></i></span>
                                <a href="#">nguyenhuong04032001@gmail.com</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer
