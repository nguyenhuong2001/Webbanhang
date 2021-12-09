import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
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
  
  const responseFacebook = (response) => {
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
            <i className="fab fa-facebook"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-twitter"></i>
            </div>
          </div>
        </div>    

        <div className="login-right">
          <div className="content">
            <p className="hellothere">Hello there</p>
            
            
            <form className="login_form" id="form-1">

              <div className="form-group">
                
                <input id="email" name="email" type="text" placeholder="Username/Email" className="form-control"/>
                <span className="form-message"></span>
              </div>
            
              <div className="form-group">
                
                <input id="password" name="password" type="password" placeholder="Password" className="form-control"/>
                <span className="form-message"></span>
              </div>

              <p className="forgot-password">Forgot password?</p>

              <button className="form-submit btn">Login</button>
              <p className="sign-up">Don't have an Account? <Link className="signup" to="/signup">Sign up</Link></p>
              <div className="signin-fb-gg">
               
              </div>
        
            </form>
           
              <FacebookLogin
                appId="404801124635752"
                autoLoad={true}
                fields="name,email,picture"
                callback={responseFacebook}
                render={renderProps => (
                  <button onClick={renderProps.onClick}>This is my custom FB button</button>
                )}/>
              <GoogleLogin
                  clientId="472545936062-074brscdde3hk8v2u4jjs2r474302qkg.apps.googleusercontent.com"
                  buttonText="Login With Google"
                  onSuccess={responseGoogle}
                  cookiePolicy={'single_host_origin'}
              />
          </div>
        </div>
      </div>
  
    </div>
  )
}

export default Login
