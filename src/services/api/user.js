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

const compareSignatures = async ({
  data: { img1Base64 = "", img2Base64 = "" },
}) => {
  try {
    const response = await axiosInstance.post("/users/compare", {
      image1_base64: img1Base64,
      image2_base64: img2Base64,
    });

    return response;
  } catch (error) {
    return error?.response;
  }
};

const update = async ({
  data: { id = "", name = "", email = "", password = "" },
}) => {
  try {
    const response = await axiosInstance.put("/users/update", {
      id,
      name,
      email,
      password,
    });

    return response;
  } catch (error) {
    return error?.response;
  }
};

export const user = {
  update,
  getSignature,
  createSignature,
  deleteSignature,
  compareSignatures,
};
