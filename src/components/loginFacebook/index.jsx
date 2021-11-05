import React from 'react'
import FacebookLogin from 'react-facebook-login';
import {useState}  from 'react'

function LoginFB() {
    
   
        const [state, setState] = useState({
            isLoggedIn: false,
            userID :'',
            name :'',
            email :'',
            picture :'',
        })
        
        const responseFacebook = (response) => {
            console.table(response);
          }
    const componentClicked = () =>{
        /*setState ({
            isLoggedIn: true,
            userID :'vvv',
            name :'vvv',
            email :'vv',
            picture :'vvv',
        })*/
    }
    console.table (state)
    if (state.isLoggedIn){
        console.log("null")
    }else {
        return (
            <div className = "LoginFB">
            
                <FacebookLogin
                    appId="457294225975768"
                    autoLoad={true}
                    fields="name,email,picture"
                   
                    callback={responseFacebook} 
                   
                />,
            </div>
        ) 
    } 
}

export default LoginFB
