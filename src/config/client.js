import axios from "axios";

export const baseURL = process.env.REACT_APP_BASE_URL;

export const instance = axios.create({
  baseURL,
  headers: {
    common: {
      "Content-Type": "application/json",
    },
  },
});

const manageToken = (config) => {
  const newConfig = { ...config };
  if (localStorage.jwtToken) {
    newConfig.headers.Authorization = `Bearer ${localStorage.jwtToken}`;
  } else {
    delete newConfig.headers.Authorization;
  }
  return newConfig;
};

instance.interceptors.request.use((config) => {
  const currentConfig = config;
  if (!currentConfig.headers) {
    currentConfig.headers = {};
    return manageToken(currentConfig);
  }
  if (!currentConfig.headers.Authorization) {
    currentConfig.headers.Authorization = {};
    return manageToken(currentConfig);
  }
  return manageToken(currentConfig);
});
