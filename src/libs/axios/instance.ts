import axios from "axios";

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  responseType: "json",
  withCredentials: true,
  headers: {
    "Access-Control-Allow-Origin": "dev.goodpharm.kr:7442",
    "Content-Type": "application/json",
    "Cache-Control": "no-cache, no-store, must-revalidate",
    Pragma: "no-cache",
    Expires: 0,
  },
});

instance.interceptors.request.use(
  (config) => {
    // request intercepters
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    // response intercepters
    return response;
  },
  (error) => {
    // error handling
    if (error.response) {
      const { status } = error.response;
      switch (status) {
        case 401:
          return;
        case 403:
          return;
        default:
          return;
      }
    }

    return Promise.reject(error);
  }
);
export default instance;
