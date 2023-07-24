import { NavLink, Link, useNavigate } from "react-router-dom";
import { AiOutlineSearch, AiOutlineHeart } from "react-icons/ai";
import { GiShoppingCart } from "react-icons/gi";
import { BiUserCircle } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import "./Header.css";
import { useState } from "react";
import { signOut } from "../../React-Redux/ProductState/ProductState";

const Header = () => {
  const dispatch = useDispatch();
  const carts = useSelector((state) => state.persistedReducer.addcart);
  const theme = useSelector((state) => state.theme);
  const [show, setShow] = useState(false);
  const Navigate = useNavigate();
  const User = useSelector((state) => state.persistedReducer.user);
  console.log(User);

  // const getTotalItems = () => {
  //   let totalItems = 0;
  //   carts.forEach((item) => {
  //     totalItems += item.quantity;
  //   });
  //   return totalItems;
  // };

  return (
    <>
      <header style={{ backgroundColor: theme ? "black" : null }}>
        <div className="headwrap">
          <h2 style={{ color: theme ? "white" : null }}>Crown</h2>
          {/* <div><Theme/></div> */}
          <nav>
            <ul>
              <NavLink to={"/"} style={{ color: theme ? "white" : null }}>
                Home
              </NavLink>
              <NavLink to={"Shop"} style={{ color: theme ? "white" : null }}>
                Shop
              </NavLink>
              <NavLink to={"About"} style={{ color: theme ? "white" : null }}>
                About
              </NavLink>
              <NavLink to={"Blog"} style={{ color: theme ? "white" : null }}>
                Blog
              </NavLink>
              <NavLink to={"Contact"} style={{ color: theme ? "white" : null }}>
                contact
              </NavLink>
              <Link to={"/element"} style={{ color: theme ? "white" : null }}>
                News{" "}
              </Link>
              <Link to="/cpage" style={{ color: theme ? "orange" : null }}>
                <GiShoppingCart /> {User ? <>({carts.length})</> : 0}
              </Link>
            </ul>
          </nav>

          <div className="Icons">
            {User ? (
              <div className="optUser" onMouseOver={() => setShow(!show)}>
                {User.name?.charAt(0)}
              </div>
            ) : (
              <BiUserCircle
                className="toggleuserbox"
                onMouseOver={() => setShow(!show)}
              />
            )}

            {show ? (
              <div className="LogSign">
                <ul className="UnBox">
                  {User ? (
                    <li
                      onClick={() => dispatch(signOut())}
                      style={{
                        fontSize: "15px",
                        marginTop: "35%",
                        fontWeight: "600",
                      }}
                    >
                      Sign Out
                    </li>
                  ) : (
                    <li>
                      <NavLink
                        to="sign"
                        style={{
                          fontSize: "15px",
                          marginTop: "15%",
                          fontWeight: "600",
                          color: 'black'
                        }}
                      >
                        <span>Sign up</span>
                      </NavLink>
                      <NavLink
                        to="login"
                        style={{
                          fontSize: "15px",
                          marginTop: "10%",
                          fontWeight: "600",
                          color: 'black'
                        }}
                      >
                        <span>Login</span>
                      </NavLink>
                    </li>
                  )}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </header>
    </>
  );
};

// (({getTotalItems()}))
export default Header;
