import { axiosInstance } from "./adapter/axios";

const getSignature = async ({
  param = {
    userId: "",
  },
}) => {
  try {
    const response = await axiosInstance.get(
      `/users/signatures/${param?.userId}`
    );

    return response;
  } catch (error) {
    return error?.response;
  }
};

const createSignature = async ({
  data = {
    bi: "",
    img: "",
    name: "",
    userId: "",
  },
}) => {
  try {
    const response = await axiosInstance.post("/users/signatures", data);

    return response;
  } catch (error) {
    return error?.response;
  }
};

const deleteSignature = async ({
  param = {
    id,
  },
}) => {
  try {
    const response = await axiosInstance.delete(
      `/users/signatures/${param?.id}`
    );

    return response;
  } catch (error) {
    return error?.response;
  }
};

export const user = { getSignature, createSignature, deleteSignature };
