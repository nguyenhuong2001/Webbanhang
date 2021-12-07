import axiosClient from "./axiosClient";

const signupApi = {
  post: (params) => {
    const url = "/signup/createUser.php";
    return axiosClient.post(url, { params });
  },
};
export default signupApi;
