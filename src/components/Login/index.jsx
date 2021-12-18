import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import "./styles.scss";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login";
import { Couter } from "../../Context/counter";
import {loginApi} from '../../api/loginApi'
import swal from 'sweetalert'
function Login() {
  const { checkUser, setCheckUser } = useContext(Couter);
  const history = useHistory()
  const [user, setUser] = useState({
    Username: "",
    Password: "",
  });
  const loginUser = async () =>{
    const res =  await loginApi(user)
    console.log(res); 
    console.log(user)
    if(!res)
      return swal("Here's a message!", "Some thing wrong")
    swal("Here's a message!", "Login success")
    //lưu vào localStorage userId
    localStorage.setItem("UserId", user.Username);
    setCheckUser(localStorage.getItem("UserId") || false);
    history.push('/')
  }
  
  
  //login gg
  const [dataFrom,setDataForm]=useState({
    Email:'',
    Password:'',
    FullName:'',
    Phone:'',
    Address:'',
    Username:'',
    Picture:''
  });
  const responseGoogle = (response) => {
    let dataGoogle = {
      HoTen: response?.profileObj.name,
      Email: response.profileObj.email,
      Username: response.profileObj.googleId,
      Picture: response.profileObj.imageUrl,
    };
    setDataForm({
      Email:response.profileObj.email,
      Password:'',
      FullName:response?.profileObj.name,
      Phone:'',
      Address:'',
      username:response.profileObj.googleId,
      Picture: response.profileObj.imageUrl,
    })
    localStorage.setItem("UserId", response.profileObj.googleId);
    localStorage.setItem("Fullname", response.profileObj.name)
    localStorage.setItem("Picture", response.profileObj.imageUrl)
    setCheckUser(localStorage.getItem("UserId") || false);
    console.log(dataGoogle);
    if (dataGoogle) history.push("");
  };

  
  const responseFacebook = (response) => {
    
    let dataFacebook = {
      Username: response.userID,
      HoTen: response.name,
      Email: response.email,
      Picture: response.picture.data,
    };
    console.log(dataFacebook);
  };
  return (
    <div className="Login">
      <div className="login-form">
        <div className="login-left">
          <div className="content">
            <h3>Logo</h3>
            <p className="welcome">Welcome to Envy</p>
            <p className="text-introduce">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac
              nisl tristique, lacinia ipsum tempor, gravida nibh. Mauris odio
              nulla, efficitur tempor velit sed, aliquam dapibus libero.
            </p>
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

            <div className="login_form" id="form-1">
              <div className="form-group">
                <input
                  id="email"
                  name="email"
                  type="text"
                  placeholder="Username/Email"
                  className="form-control"
                  onChange={(e) => setUser({...user,Username: e.target.value})}
                />
                <span className="form-message"></span>
              </div>

              <div className="form-group">
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Password"
                  className="form-control"
                  onChange={(e) => setUser({...user,Password: e.target.value})}
                />
                <span className="form-message"></span>
              </div>

              <p className="forgot-password">Forgot password?</p>

              <button className="form-submit btn" onClick={() => loginUser()}>Login</button>
              <p className="sign-up">
                Don't have an Account?{" "}
                <Link className="signup" to="/signup">
                  Sign up
                </Link>
              </p>
              <div className="signin-fb-gg"></div>
            </div>

            <FacebookLogin
              appId="404801124635752"
              autoLoad={true}
              fields="name,email,picture"
              callback={responseFacebook}
              cssClass="my-facebook-button-class"
              render={(renderProps) => (
                <button onClick={renderProps.onClick}>
                  This is my custom FB button
                </button>
              )}
            />

            <GoogleLogin
              clientId="472545936062-074brscdde3hk8v2u4jjs2r474302qkg.apps.googleusercontent.com"
              buttonText={"Login with Google"}
              onSuccess={responseGoogle}
              cookiePolicy={"single_host_origin"}
              className="my-google-button-class"
              isSignedIn={false}
            />
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
