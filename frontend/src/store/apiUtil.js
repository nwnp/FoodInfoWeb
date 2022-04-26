import axios from "axios";

const api = axios.create();

api.interceptors.request.use(
  async (request) => {
    const token = window.localStorage.getItem("token");
    request.headers.token = token;
    return request;
  },
  async (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  async (response) => {
    const token = response.headers.token;
    if (token) {
      window.localStorage.setItem("token", token);
    }
  },
  async (error) => {
    return Promise.reject(error);
  }
);

export default api;
