import React from 'react'
import './styles.scss'
import { Link } from 'react-router-dom'
const mangSign = [

]
function SignUp() {
    return (
        <div className="Signup" >
            {/* <h3 class="sign_heading">Sign Up</h3>
            <form action="" method="POST" class="sign_form" id="form-1">
            
                <p class="sign_desc">Welcom to ENVY, where you can shopping online.</p>

                <div class="spacer"></div>

                <div class="form-group">
                    <label for="fullname" class="form-label">User name</label>
                    <input id="fullname" name="fullname" type="text" placeholder="VD:NguyenHuong" class="form-control"/>
                    <span class="form-message"></span>
                </div>

                <div class="form-group">
                    <label for="email" class="form-label">Email</label>
                    <input id="email" name="email" type="text" placeholder="VD:nguyehuong@gmail.com" class="form-control"/>
                    <span class="form-message"></span>
                </div>

                <div class="form-group">
                    <label for="password" class="form-label">Password</label>
                    <input id="password" name="password" type="password" placeholder="Password" class="form-control"/>
                    <span class="form-message"></span>
                </div>

                <div class="form-group">
                    <label for="password_confirmation" class="form-label">Confirm password</label>
                    <input id="password_confirmation" name="password_confirmation" placeholder="Confirm Password" type="password" class="form-control"/>
                    <span class="form-message"></span>
                </div>
                <div class="wthree-text">
                        <label class="anim">
                            <input type="checkbox" class="checkbox" required=""/>
                            <span>I Agree to the terms and conditions</span>
                        </label>
                        <div class="clear"> </div>
                </div>

                <button class="form-submit">Sign up</button>
                    
                <p>You have an Account?<Link to="/Login"> Login now!</Link> </p>
                
            </form>
            <div class="sign-colorlib">
			<p>© 2018 Colorlib Signup Form. All rights reserved | Design by <a href="https://colorlib.com/" target="_blank" class ="lib-link">Colorlib</a></p>
		    </div> */}

<div className="login-form">
        <div className="login-left">
          <div className="content">
            <h3>Logo</h3>
            <p className="welcome">Welcome to Envy</p>
            <p className="text-introduce">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac nisl tristique, lacinia ipsum tempor, gravida nibh. Mauris odio nulla, efficitur tempor velit sed, aliquam dapibus libero.</p>
            <div className="icon">
            <i class="fab fa-facebook"></i>
            <i class="fab fa-instagram"></i>
            <i class="fab fa-twitter"></i>
            </div>
          </div>
        </div>    

        <div className="login-right">
          <div className="content">
            <p className="hellothere">Sign up</p>
            
            
            <form action="" method="POST" class="login_form" id="form-1">

              <div class="form-group">
                
                <input id="email" name="email" type="text" placeholder="Username/Email" class="form-control"/>
                <span class="form-message"></span>
              </div>
            
              <div class="form-group">
                
                <input id="password" name="password" type="password" placeholder="Password" class="form-control"/>
                <span class="form-message"></span>
              </div>

              <div class="form-group">
                
                <input id="confirm-password" name="confirm-password" type="password" placeholder="Confirm your password" class="form-control"/>
                <span class="form-message"></span>
              </div>

              <div class="wthree-text">
                <label class="anim">
                    <input type="checkbox" class="checkbox" required=""/>
                    <span>I Agree to the terms and conditions</span>
                </label>
                <div class="clear"></div>
            </div>

              <button class="form-submit btn">Create account</button>
              
              <p className="loginnow">You have an Account? <Link className="login-now" to="/Login">Login now!</Link></p>
              
        
            </form>
          </div>
        </div>
      </div>
        </div>
    )
}

export default SignUp
