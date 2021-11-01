import React from 'react'
import { Link } from 'react-router-dom'
import './styles.scss'

function Login() {
  return (
    <div className="login">
        <h3 class="login_heading">Login</h3>
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
		    </div>
        

      
    </div>
  )
}

export default Login
