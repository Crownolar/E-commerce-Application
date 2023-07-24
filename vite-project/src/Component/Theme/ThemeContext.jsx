import { createContext } from "react";
import { useSelector } from "react-redux";

export const ThemeContext = createContext();
export const ThemeProvider = ({ children }) => {
  const User = useSelector((state) => state.persistedReducer.user);
  console.log(User);

  return (
    <ThemeContext.Provider
      value={{User}}
    >
      {children}
    </ThemeContext.Provider>
  );
};
