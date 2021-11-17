import React from 'react';
import "./styles.scss";
import { Link } from 'react-router-dom';
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
                            <li><a href="#"><Link className = "Contract" to="../../Contact">Introduce about the company</Link></a></li>
                            <li><a href="#"><Link className = "Contract" to="../../Contact">Contact</Link></a></li>
                            <li><a href="#"><Link className = "Blogger" to="../../Blog">Blog</Link></a></li>
                        </ul>
                    
                        <ul class="social-icon">
                                <li class = "social-icon-fb"><a href="https://www.facebook.com/ENVY-UIT-100244785808927"><i class="fab fa-facebook"></i></a></li>
                                <li class = "social-icon-ins"><a href="https://www.instagram.com/thecosmeticsofficial/"><i class="fab fa-instagram"></i></a></li>
                                <li class = "social-icon-tw"><a href="https://twitter.com/cb_beautynews"><i class="fab fa-twitter"></i></a></li>
                                <li class = "social-icon-ytb"><a href="https://www.youtube.com/user/lisaeldridgedotcom"><i class="fab fa-youtube"></i></a></li>
                        </ul>
                    </div>
                    
                    <div class="noi-dung links">
                        <h2>PRODUCT</h2>
                        <ul>
                            <li><a href="#"><Link className = "Home" to="../../">Home page</Link></a></li>
                            <li><a href="#"><Link className = "Home" to="../../">Best Seller</Link></a></li>
                            <li><a href="#"><Link className = "Home" to="../../">Latest Product</Link></a></li>
                            <li><a href="#"><Link className = "Home" to="../../">Reduce Product</Link></a></li>
                        </ul>
                    </div>
                   
                    <div class="noi-dung contact">
                        <h2>CONTACT INFO</h2>
                        <ul class="info">
                            <li>
                                <span>
                                <lord-icon
                                    src="https://cdn.lordicon.com/zzcjjxew.json"
                                    trigger="loop"
                                    colors="primary:#121331,secondary:#c76f16"
                                    style={{width:'50px', height:'50px'}}>
                                </lord-icon>
                                </span>
                                <span>Street 6<br />
                                    Linh Trung Ward, Thu Duc City<br />
                                    Viet Nam</span>
                            </li>
                            <li>
                                <span>
                                <lord-icon
                                    src="https://cdn.lordicon.com/hciqteio.json"
                                    trigger="loop"
                                    colors="primary:#121331,secondary:#c76f16"
                                    style={{width:'50px', height:'50px'}}>
                                </lord-icon>
                                </span>
                                <p><a href="#">+84 918 743 787</a>
                                    <br />
                                    <a href="#">+84 961 710 409</a></p>
                            </li>
                            <li>
                                <span>
                                <lord-icon
                                    src="https://cdn.lordicon.com/rhvddzym.json"
                                    trigger="loop"
                                    colors="primary:#c76f16,secondary:#08a88a"
                                    axis-y="30"
                                    style={{width:'50px', height:'50px'}}>
                                </lord-icon>
                                </span>
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
