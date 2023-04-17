import jwt_decode from "jwt-decode";
// import store from "../redux/combineStore";
// import { loginUserAction } from "../features/auth/actions/auth.types";

export const getTokenData = () => {
  if (localStorage.jwtToken) {
    const decoded = jwt_decode(localStorage.jwtToken);
    return decoded;
    // store.dispatch(loginUserAction(decoded));
  }
};
