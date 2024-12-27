import axios from "axios";

//Axios instance for making http request
const axiosBase = axios.create({
  // baseURL: "http://localhost:7777/",
  baseURL: "https://evangadi-api-jqaq.onrender.com/",
});
export default axiosBase;
