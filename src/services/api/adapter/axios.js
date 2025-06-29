import axios from "axios";
import { urls } from "../util";

export const axiosInstance = axios.create({
  baseURL: urls.restApi,
  // baseURL: "http://localhost:3333",
  // timeout: 1000,
  // headers: { "X-Custom-Header": "foobar" },
});
