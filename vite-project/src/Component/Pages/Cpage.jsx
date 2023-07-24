import { Link, NavLink } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import { AiOutlineHeart, AiOutlineSearch } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { removeCart, total, CartMinus, CartPlus } from "../../React-Redux/ProductState/ProductState";
import "./Cpage.css";
import { useEffect } from "react";

const Cpage = () => {
  //   const [data, setData] = useState({});
  // const { state, carts, dispatch, total } = useContext(ThemeContext);

  const dispatch = useDispatch();
  const carts = useSelector((state) => state.persistedReducer.addcart);
  const cartsTotal = useSelector((state) => state.persistedReducer.total);
  const theme = useSelector((state) => state.theme); // Add theme state from Redux

  // Toggle theme action
  const toggleTheme = () => {
    dispatch({ type: "TOGGLE_THEME" });
  };

  const TotalPrice = carts.reduce((e, i)=>e + i.price * i.Qty, 0)
  console.log(TotalPrice);
  console.log(carts);

    // dispatch(total())


//   useEffect(()=>{
// }, [CartPlus])

  return (
    <div
      className="head11"
      style={{ backgroundColor: theme ? "#669bbc" : null }}
    >
      <header className="header112" style={{ color: theme ? "#780000" : null }}>
        <h1>Cart Page</h1>
      </header>
      <div className="butt">
      <button className="button">Check Out</button>
      </div>


       <h3>Total: ${TotalPrice}</h3>

      {theme === 0 ? (
        <h6>Empty Product</h6>
      ) : (
        <div className="Aproduct1">
          {carts?.map((p) => (
            <Link className="aprodcard1" key={p.id}>
              <div className="cardimg1">
                <div className="showicon1">
                  <div className="showcircle1">
                    <div className="cir11">
                      <BsCart4 />
                    </div>
                    <div className="cir11">
                      <AiOutlineHeart />
                    </div>
                    <div className="cir11">
                      <AiOutlineSearch />
                    </div>
                  </div>
                </div>

                <img src={p.image} alt="" />
              </div>

              <div
                className="txt1"
                style={{
                  backgroundColor: theme ? "#003049" : null,
                  color: theme ? "#fdf0d5" : null,
                }}
              >
                <div className="tet1">
                  <h5>{p.title}</h5>
                  <p>${p.Qty * p.price}</p>
                  <p>Quantity: {p.Qty}</p>
                </div>

                <div className="btnn">
                  <button
                  onClick={() => dispatch(CartPlus(p))}
                    style={{
                      width: "30px",
                      height: "20px",
                      border: "none",
                      color: "white",
                      backgroundColor: "gray",
                    }}
                  >
                    +
                  </button>
                  <button
                    onClick={() => dispatch(removeCart(p))}
                    style={{ backgroundColor: theme ? "#c1121f" : null }}
                  >
                    Delete Item
                  </button>
                  <button
                  onClick={() => dispatch(CartMinus(p))}
                    style={{
                      width: "30px",
                      height: "20px",
                      border: "none",
                      color: "white",
                      backgroundColor: "gray",
                    }}
                  >
                    -
                  </button>
                </div>
                {/* <But /> */}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cpage;
