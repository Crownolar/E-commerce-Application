import { NavLink } from "react-router-dom";
// import { ThemeContext } from "./ContextApi/Context";
import { useDispatch, useSelector } from "react-redux";
import { useReducer } from "react";

const But = () => {
  // const {state, dispatch} = useContext(ThemeContext)
  const theme = useSelector((state) => state.theme);

  function handleAddTask(id, name, price, image) {
    dispatch({
      type: "added",
      id: id,
      name: name,
      price: price,
      image: image,
    });
  }

  return (
    <button
      style={{ backgroundColor: theme ? "#fca311" : null }}
      onClick={() => handleAddTask(p.id, p.title, p.price, p.image)}
    >
      Add to Cart
    </button>
  );
};

export default But;
