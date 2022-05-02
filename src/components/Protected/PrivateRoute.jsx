import { Navigate, Route } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const auth = localStorage.getItem("userInfo");
  return auth ? children : <Navigate to="/" />;
};

export default PrivateRoute;