import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Navigate, useLocation } from "react-router";
// import { PropagateLoader } from "react-spinners";

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  const location = useLocation();
  console.log(location);
  //   if (loading) {
  //     return (
  //       <div className="h-[97vh] flex justify-center items-center">
  //         <PropagateLoader color="#e74c3c" />
  //       </div>
  //     );
  //   }
  if (!user) {
    return <Navigate to="/login" state={location.pathname}></Navigate>;
  }
  return children;
};

export default PrivateRoute;
