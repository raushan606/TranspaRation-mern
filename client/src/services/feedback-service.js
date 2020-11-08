import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:5000/api/feedback";

//const headers = { "x-auth-token": localStorage.token };
export const getFeedback = async () => {
  return await axios.get(API_URL, { headers: authHeader() });
};

export const postFeedback = async (data) => {
  return await axios.post(API_URL, data, { headers: authHeader() });
};
