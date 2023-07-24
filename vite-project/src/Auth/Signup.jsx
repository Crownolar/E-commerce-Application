import React, { useState } from "react";
import { SpinnerCircular } from "spinners-react";
import axios from "axios";
import "./AuthStyle.css";
import { useDispatch } from "react-redux";
import { userData } from "../React-Redux/ProductState/ProductState";
import { useNavigate } from "react-router-dom";
import { BiSolidUser } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { TbBuildingSkyscraper } from "react-icons/tb";
import { RiLockPasswordFill, RiLockPasswordLine } from "react-icons/ri";
import "./AuthStyle.css";
import SignImage from './login.png'


const Signup = () => {
  const [check, setCheck] = useState(false);

  const dispatch = useDispatch();
  const nav = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [message, setmessage] = useState({ error: false, value: "", msg: "" });
  const [loading, setLoading] = useState(false);

  const data = { name, email, password };
  // console.log(data)

  const url = "https://eflexshop.onrender.com/user/register";

  // const FromErorr = () => {

  // }

  const Signup = (e) => {
    e.preventDefault();
    if (!name) {
      setmessage({ error: true, value: "name", msg: "*Input your name" });
      setLoading(false);
      // setmessage("")
    } else if (!email) {
      setmessage({ error: true, value: "email", msg: "*Input your email" });
      setLoading(false);
      // setmessage("")
    } else if (!password) {
      setmessage({
        error: true,
        value: "password",
        msg: "*Input your password",
      });
      setLoading(false);
    } else if (!confirm) {
      setmessage({
        error: true,
        value: "cpas",
        msg: "*Input your confirmPassword",
      });
      setLoading(false);
    } else if (password !== confirm) {
      setmessage({
        error: true,
        value: "paaswordError",
        msg: "*password does not match",
      });
      setLoading(false);
    } else if (password.length < 8) {
      setmessage({
        error: true,
        value: "passwordlength",
        msg: "* Your password must be at least 8 letters",
      });
      setLoading(false);
    } else {
      setmessage("");
      setLoading(true);

      axios
        .post(url, data)
        .then((res) => {
          console.log(res);
          dispatch(userData(res.data.data));
          nav("/");
        })
        .catch((err) => {
          console.log(err.response.data.errors);
          setmessage({
            error: true,
            value: "email",
            msg: err.response.data.errors[0].msg,
          });
          setLoading(false);
        });
    }
    console.log(Signup);
  };
  


  return (
    <div>
      <section>
        <div className="loginContainer">
          <div className="textContainer">
            <div className="headline">
              <h1>Sign Up</h1>
            </div>
            <div className="inputs">
              <div className="texts">
                {message.value === "name" ? (
                  <p
                    style={{
                      color: "red",
                      fontSize: "10px",
                      marginLeft: "5px",
                    }}
                  >
                    {message.msg}
                  </p>
                ) : null}
                <BiSolidUser className="user" />
                <input
                  type="text"
                  placeholder="Enter your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="texts">
                <MdEmail className="user" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {message.value === "email" ? (
                  <p
                    style={{
                      color: "red",
                      fontSize: "10px",
                      marginLeft: "5px",
                    }}
                  >
                    {message.msg}
                  </p>
                ) : null}
              </div>
              <div className="texts">
                <RiLockPasswordFill className="user" />
                <input
                  type="password"
                  placeholder="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {message.value === "password" ? (
                  <p
                    style={{
                      color: "red",
                      fontSize: "10px",
                      marginLeft: "5px",
                    }}
                  >
                    {message.msg}
                  </p>
                ) : null}
              </div>
              <div className="texts">
                <RiLockPasswordLine className="user" />
                <input
                  type="password"
                  placeholder="confirm password"
                  value={confirm}
                  onChange={(e) => setConfirm(e.target.value)}
                />
                {message.value === "cpass" ? (
                  <p
                    style={{
                      color: "red",
                      fontSize: "10px",
                      marginLeft: "5px",
                    }}
                  >
                    {message.msg}
                  </p>
                ) : null}
                {message.value === "paaswordError" ? (
                  <p
                    style={{
                      color: "red",
                      fontSize: "10px",
                      marginLeft: "5px",
                    }}
                  >
                    {message.msg}
                  </p>
                ) : null}

                {message.value === "passwordlength" ? (
                  <p
                    style={{
                      color: "red",
                      fontSize: "10px",
                      marginLeft: "5px",
                    }}
                  >
                    {message.msg}
                  </p>
                ) : null}
              </div>
              <div className="texts">
                {/* <TbBuildingSkyscraper className="user" /> */}

                {check ? (
                  <>
                    {" "}
                    <TbBuildingSkyscraper className="user" />
                    <input type="text" placeholder="company name" />
                  </>
                ) : null}
              </div>
              <div className="check">
                <input
                  type="checkbox"
                  className="checkbox"
                  onClick={() => setCheck(!check)}
                />
                {check ? <span>As a buyer</span> : <span>As a seller</span>}
              </div>
            </div>
            <div className="loginbtn">
              <button onClick={(e) => Signup(e)}>
                {loading ? <SpinnerCircular size={30} /> : "Sign up"}
              </button>
            </div>
          </div>
          <div className="imageContainer">
            <img src={SignImage}  alt="signImage" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signup;
