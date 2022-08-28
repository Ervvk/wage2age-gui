import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000/wage2api";

/**
 fixed :
  - no need to JSON.stringify to then immediatly do a JSON.parse
  - don't use export defaults, because default imports are hard to search for
  - axios already support generic request in one parameter, no need to call specialized ones
**/
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

/*
export function blobToBase64(blob) {
  return new Promise((resolve, _) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.readAsDataURL(blob);
  });
}

export const b64toUrl = async (base64Data) => {
  const r = await fetch(base64Data);
  const blob = await r.blob();
  console.log(r instanceof Blob);
  console.log(r.type);

  return URL.createObjectURL(blob);
};
*/
