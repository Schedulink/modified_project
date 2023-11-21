import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Fac_login.css";
// import "./For_pass.css";
import user_icon from "../Assets/person.png";
import email_icon from "../Assets/email.png";
import password_icon from "../Assets/password.png";

const Fac_login = () => {
  // Axios.get('http://127.0.0.1:8000/ttgapp/Semester/').then(res => console.log(res.data))
  const [facid, setFacid] = useState([]);
  const [email, setEmail] = useState([]);
  const [pass, setPass] = useState([]);

  const [LoginData, setLoginData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/admin/")
      .then((res) => setLoginData(res.data));
  }, []);

  let [loginfilter, setLoginFilter] = useState([]);

  let [msg, setMsg] = useState("");

  const subform = (e) => {
    e.preventDefault();
    // console.log(LoginData);

    setLoginFilter(
      LoginData.filter(
        (d) =>
          d.fac_id === Number(facid) &&
          d.password === pass &&
          d.email_id === email
      )
    );
    console.log(loginfilter);

    if (loginfilter.length === 0) {
      setMsg("Invalid Login!");
      console.log(msg);
    }
  };

  useEffect(() => {
    console.log(loginfilter);

    if (loginfilter.length !== 0) {
      navigate("/Home");
    }
  }, [loginfilter]);

  return (
    <div className="container">
      <div className="header">
        <div className="text">Login</div>
        <div className="underline"></div>
      </div>
      <form onSubmit={subform}>
        {<p>{msg}</p>}
        <div className="inputs">
          <div className="input">
            <img src={user_icon} alt="" />
            <input
              type="number"
              name="fac_id"
              placeholder="ID"
              value={facid}
              onChange={(e) => setFacid(e.target.value)}
            />
            {/* <input type='text' name='fac_id' value={LoginData.fac_id} onChange={handlechange}/> */}
          </div>
          <div className="input">
            <img src={email_icon} alt="" />
            <input
              type="email"
              name="email_id"
              placeholder="email_id"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input">
            <img src={password_icon} alt="" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
          </div>
        </div>

        <div
          classname="forgot-password "
          style={{ marginLeft: "6rem", marginTop: "1rem" }}
        >
          <Link to="/For_pass">
            Forgot Password?<span>Click Here!</span>
          </Link>
        </div>

        {/* <div className="submit-container"></div> */}

        <button className="submit" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Fac_login;
