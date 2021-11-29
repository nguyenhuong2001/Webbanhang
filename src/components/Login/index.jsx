import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';
import GoogleLogin from 'react-google-login';

function Login() {
  //Xử lý sumit form
  /*
  const [email,setEmail] = useState('')
  const [name,setName] = useState('')
  const handleSubmit = () => {
    //Call API 
    console.log({name,email})
  }
  */
  const responseGoogle = (response) => {
    console.log(response);
  }
  

  return (
    <div className="Login">    
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
            
            
            <form class="login_form" id="form-1">

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
               
              </div>
        
            </form>
            <button className="btn btn-fb">
                
                </button>
                <button className="btn btn-gg">
                <GoogleLogin
                  clientId="472545936062-074brscdde3hk8v2u4jjs2r474302qkg.apps.googleusercontent.com"
                  buttonText="Login"
                  onSuccess={responseGoogle}
                  cookiePolicy={'single_host_origin'}
                />
                </button>
          </div>
        </div>
      </div>
  
    </div>
  )
}

export default Login
