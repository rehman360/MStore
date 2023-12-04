import LoginContext from "../../context/logincontext";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

function PrivateRoutes({ children }) {
  const { IsLoggedIn } = useContext(LoginContext);
  const location = useLocation();
  if (!IsLoggedIn) {
    console.log(IsLoggedIn);
    return <Navigate to="/login" state={{ redirectedFrom: location }} />;
  } else return children;
}

export default PrivateRoutes;