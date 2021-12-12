import axios from "axios";


export const signUpApi= async (dataForm)=>{

    const res = await axios.post('/user/signup',dataForm)
    console.log(res)

}
