import React from 'react'
import './styles.scss'
import { Link } from 'react-router-dom'
const mangSign = [

]
function SignUp() {
    return (
        <div className="sign" >
            <h3 class="sign_heading">Sign Up</h3>
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
		    </div>

        </div>
    )
}

export default SignUp
