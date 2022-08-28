import axios from "axios";

axios.defaults.baseURL = "https://wage2free.azurewebsites.net/wage2api";

export const http = async (params) => {
  try {
    const result = await axios.request(params);
    console.log("response:", result);
    return result;
  } catch (error) {
    console.log("error:", error.response);
    return error.response;
  }
};
