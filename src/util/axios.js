import axios from "axios";

const api = axios.create({
  baseURL: "https://roberas-api.onrender.com",
});
export default api;
