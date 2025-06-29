import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://192.168.0.205:3333",
  // baseURL: "http://localhost:3333",
  // timeout: 1000,
  // headers: { "X-Custom-Header": "foobar" },
});
