import axois from "axois";

export const GetProductId=async(id)=>{ // async va await de noi chuyen voi backend va co so du lieu=> nc vs backend thi dung async await

const response = await axois.get(`/product/${id}`)//router API cuar backend product/2 ra sp cos id=2
console.log(response)
console.log(response?.data)
console.log(response?.status)
if(response?.status===200){
    return response.data;
}
return [];

}
