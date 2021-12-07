import React from 'react'
import { useState, useEffect } from 'react';
import './styles.scss'
import { Link } from 'react-router-dom'


const handleAdd = async e => {

}
const handleSubmit = e => {
  
}
function SignUp() {
  
    return (
        <div className="Signup" >
            

        <div className="login-form">
                <div className="login-left">
                  <div className="content">
                    <h3>Logo</h3>
                    <p className="welcome">Welcome to Envy</p>
                    <p className="text-introduce">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac nisl tristique, lacinia ipsum tempor, gravida nibh. Mauris odio nulla, efficitur tempor velit sed, aliquam dapibus libero.</p>
                    <div className="icon">
                    <i className="fab fa-facebook"></i>
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-twitter"></i>
                    </div>
                  </div>
                </div>    

                <div className="login-right">
                  <div className="content">
                    <p className="hellothere">Sign up</p>
                    
                    
                    <form action="" method="POST" className="login_form" id="form-1">
                      <div className="form-group">
                        <input id="email" name="email" type="text" placeholder="Username/Email" className="form-control"/>
                        <span className="form-message"></span>
                      </div>
                    
                      <div className="form-group">
                        <input id="password" name="password" type="password" placeholder="Password" className="form-control"/>
                        <span className="form-message"></span>
                      </div>

                      <div className="form-group">
                        <input id="email" name="email" type="text" placeholder="Full name" className="form-control"/>
                        <span className="form-message"></span>
                      </div>

                      <div className="form-group">
                        <input id="email" name="email" type="text" placeholder="Phone number" className="form-control"/>
                        <span className="form-message"></span>
                      </div>

                      <div className="form-group">
                        <input id="email" name="email" type="text" placeholder="Address" className="form-control"/>
                        <span className="form-message"></span>
                      </div>

                      <div className="form-group">
                        <input id="email" name="email" type="text" placeholder="Email" className="form-control"/>
                        <span className="form-message"></span>
                      </div>
                      

                      <div className="wthree-text">
                        <label className="anim">
                            <input type="checkbox" className="checkbox" required=""/>
                            <span>I Agree to the terms and conditions</span>
                        </label>
                        <div className="clear"></div>
                    </div>

                      <button className="form-submit btn">Create account</button>
                      
                      <p className="loginnow">You have an Account? <Link className="login-now" to="/Login">Login now!</Link></p>
                      
                
                    </form>
                  </div>
                </div>
              </div>
                </div>
    )
}

export default SignUp
