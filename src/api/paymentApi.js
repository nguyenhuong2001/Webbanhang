import axios from "axios";

export const paymentApi = async (dataForm) => {
  try {
    console.log(dataForm);
    const res = await axios.post("", dataForm);
    if (res) return true;
  } catch (error) {
    return false;
  }
};