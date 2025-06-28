import { axiosInstance } from "./adapter/axios";

const singUp = async ({
  data = {
    name: "",
    email: "",
    password: "",
  },
}) => {
  try {
    const response = await axiosInstance.post("/auth/signup", data);

    return response;
  } catch (error) {
    return error?.response;
  }
};

const singIn = async ({
  data = {
    email: "",
    password: "",
  },
}) => {
  try {
    const response = await axiosInstance.post("/auth/signin", data);

    return response;
  } catch (error) {
    return error?.response;
  }
};

export const auth = { singUp, singIn };
