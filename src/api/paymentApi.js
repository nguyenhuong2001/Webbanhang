import axios from "axios";

export const paymentApi = async (dataForm) => {
  try {
    const res = await axios.post("/order/payment", dataForm);
    if (res) return true;
  } catch (error) {
    return false;
  }
};

export const getOrder = async () => {
  const response = await axios.get(`/order`);
  if (response?.status === 200) {
    return response.data;
  }
  return [];
};

export const getRating = async () => {
  const response = await axios.get(`/order/rating`);
  if (response?.status === 200) {
    return response.data;
  }
  return [];
};