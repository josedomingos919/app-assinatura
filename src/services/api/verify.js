import axios from "axios";

import { urls } from "./util";

const compareSignatures = async ({
  data: { img1Base64 = "", img2Base64 = "" },
}) => {
  try {
    const response = await axios.post(`${urls.phytonService}/compare`, {
      image1_base64: img1Base64,
      image2_base64: img2Base64,
    });

    return response;
  } catch (error) {
    return error?.response;
  }
};
export const verify = { compareSignatures };
