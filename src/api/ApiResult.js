import axios from "axios";

export const getUser=async()=>{ 

const response = await axios.get(`/user`)
console.log(response)
console.log(response?.data)
console.log(response?.status)
if(response?.status===200){
    return response.data;
}
return [];


}
export const getProductId=async(id)=>{ 

    const response = await axios.get(`/product/${id}`)
    if(response?.status===200){
        return response?.data;
    }
    return null;
    
    
    }
export const getMakeUp=async()=>{ 

    const response = await axios.get(`/product/makeup`)
    if(response?.status===200){
        return response.data;
    }
    return [];  
    }
