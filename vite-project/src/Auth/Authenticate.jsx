import { useContext } from "react";
import { ThemeContext } from "../Component/Theme/ThemeContext";
import { Outlet, Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const Authenticate = () => {
  //   const User = useSelector((state) => state.persistedReducer.user);
  //   console.log(User);
  const location = useLocation();
//   const themeContext = useContext(ThemeContext);
//   const User = themeContext.User;
const {User} = useContext(ThemeContext)
  console.log("Authenticate", User);

  return ( 
    <>
      { User? (
        <Outlet />
      ) : (
        <Navigate to="./login" state={{ from: location }} replace />
      )}
    </>
  );
};

export default Authenticate;
