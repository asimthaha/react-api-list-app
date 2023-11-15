import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ApiLogin = () => {
  const [inputField, setInputField] = useState({
    username: "",
    password: "",
  });

  const inputHandler = (event) => {
    setInputField({ ...inputField, [event.target.name]: event.target.value });
  };

  const readVal = () => {
    console.log(inputField);
    if (inputField.username == "admin" && inputField.password == "abcd") {
      navigate("/add");
    } else {
      alert("invalid credentials");
    }
  };

  const navigate = useNavigate();

  return (
    <div>
      <div className="container d-flex align-items-center justify-content-center">
        <div className="row">
          <div className="col">
            <div className="row g-3 card">
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="username"
                  value={inputField.username}
                  onChange={inputHandler}
                />
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  value={inputField.password}
                  onChange={inputHandler}
                />
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button onClick={readVal} className="btn btn-warning">
                  LOGIN
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApiLogin;
