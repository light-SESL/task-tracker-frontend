import jwt_decode from "jwt-decode";

export const getTokenData = () => {
  if (localStorage.jwtToken) {
    return jwt_decode(localStorage.jwtToken);
  }
};

export const setToken = (response) => {
  const { token } = response.data;
  localStorage.setItem("jwtToken", token);
  return null;
};
