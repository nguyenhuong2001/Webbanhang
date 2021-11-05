import { colors } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import './styles.scss'

function Login() {
  return (
    <div className="Login">
        {/* <h3 class="login_heading">Login</h3>
        <form action="" method="POST" class="login_form" id="form-1">

            <div class="spacer"></div>

            <div class="form-group">
                <label for="email" class="form-label">Email</label>
                <input id="email" name="email" type="text" placeholder="email" class="form-control"/>
                <span class="form-message"></span>
            </div>

            <div class="form-group">
                <label for="password" class="form-label">Password</label>
                <input id="password" name="password" type="password" placeholder="Password" class="form-control"/>
                <span class="form-message"></span>
            </div>
            <button class="form-submit">Login</button>
                    
            <p>Don't have an Account? <Link to="/signup">Sign up</Link></p>
                
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
            <p className="hellothere">Hello there</p>
            
            
            <form action="" method="POST" class="login_form" id="form-1">

              <div class="form-group">
                
                <input id="email" name="email" type="text" placeholder="Username/Email" class="form-control"/>
                <span class="form-message"></span>
              </div>
            
              <div class="form-group">
                
                <input id="password" name="password" type="password" placeholder="Password" class="form-control"/>
                <span class="form-message"></span>
              </div>

              <p className="forgot-password">Forgot password?</p>

              <button class="form-submit btn">Login</button>
              <p className="sign-up">Don't have an Account? <Link className="signup" to="/signup">Sign up</Link></p>
              <div className="signin-fb-gg">
                <button className="btn btn-fb">Login with Facebook</button>
                <button className="btn btn-gg">Login with Google</button>
              </div>
        
            </form>
          </div>
        </div>
      </div>
  
    </div>
  )
}

export default Login
