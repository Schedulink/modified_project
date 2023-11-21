import React, { useState } from "react";

const For_pass = () => {
  const [email, setEmail] = useState("");
  const hansub = () => {
    console.log(email);
  };
  return (
    <div className="forgo">
      <h3>Forgot Password</h3>
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          className="form-control"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button className="btn btn-primary btn-block" onClick={hansub}>
        Login
      </button>
    </div>
  );
};

export default For_pass;
