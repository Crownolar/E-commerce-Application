// import { ThemeContext } from "./Pages/ContextApi/Context";
import { useDispatch, useSelector } from "react-redux";
import { useContext } from "react";

const Shop = () => {
  // const { state } = useContext(ThemeContext);
  const theme = useSelector((state) => state.theme);

  return (
    <>
      <main className="top" style={{ backgroundColor: theme? "orange" : null }}>
        <h1 style={{ color: theme ? "black" : null }}>Shopping Soon</h1>
      </main>
    </>
  );
};

export default Shop;
