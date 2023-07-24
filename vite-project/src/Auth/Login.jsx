import React from "react";
import "./AuthStyle.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SpinnerCircular } from "spinners-react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { userData } from "../React-Redux/ProductState/ProductState";

const Login = () => {
  const [check, setCheck] = useState(false);
  const [loading, setLoading] = useState(false);
  const nav = useNavigate();
  const Dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setmessage] = useState({ error: false, value: "", msg: "" });

  const data = { email, password };
  const url = "https://eflexshop.onrender.com/user/login";

  const Login = (e) => {
    e.preventDefault();
    if (!email) {
      setmessage({ error: true, value: "email", msg: "*Input your email" });
      setLoading(false);
    } else if (!password) {
      setPassword({
        error: true,
        value: "password",
        msg: "* Input your password",
      });
      setLoading(false);
    }

    axios
      .post(url, data)
      .then((res) => {
        console.log(res);
        Dispatch(userData(res.data.data));
        nav("/");
      })
      .catch((err) => {
        console.log(err);
        setmessage({
          error: true,
          value: "email",
          msg: err.response.data.errors[0].msg,
        });
      });
  };

  return (
    <div>
      <section>
        <div className="loginContainer1">
          <div className="textContainer1">
            <div className="headline1">
              <h1>Login</h1>
            </div>
            <div className="inputs1">
              <div className="texts1">
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
              <div className="texts1">
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
              <div className="texts1">
                {/* <input
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
                ) : null} */}
                {/* {message.value === "paaswordError" ? (
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
                ) : null} */}
              </div>
              <div className="check1">
                <input
                  type="checkbox"
                  className="checkbox"
                  onClick={() => setCheck(!check)}
                />
                {check ? <span>As a buyer</span> : <span>As a seller</span>}
              </div>
            </div>
            <div className="loginbtn1">
              <button onClick={(e) => Login(e)}>
                {loading ? <SpinnerCircular size={30} /> : "Login"}
              </button>
            </div>
          </div>
          <div className="imageContainer1">
            <img src="./login.png" alt="signImage" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
