import axios from "axios";
import React, { useState } from "react";
import ApiNavbar from "./ApiNavbar";

const ApiAdd = () => {
  const [inputData, changeInputData] = useState({
    API: "",
    Description: "",
    Auth: "",
    HTTPS: "",
    Cors: "",
    Link: "",
    Category: "",
  });
  const inputHandler = (event) => {
    changeInputData({ ...inputData, [event.target.name]: event.target.value });
  };
  const readValue = () => {
    console.log(inputData);
  };
  return (
    <div>
      <ApiNavbar />
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="row g-3">
              <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">
                  API Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="API"
                  value={inputData.API}
                  onChange={inputHandler}
                />
              </div>
              <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">
                  Auth
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="Auth"
                  value={inputData.Auth}
                  onChange={inputHandler}
                />
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">
                  Description
                </label>
                <textarea
                  name="Description"
                  value={inputData.Description}
                  onChange={inputHandler}
                  id=""
                  cols="30"
                  rows="10"
                  className="form-control"
                ></textarea>
              </div>
              <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                  HTTPS No
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="HTTPS"
                  value={inputData.HTTPS}
                  onChange={inputHandler}
                />
              </div>
              <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                  Cors
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="Cors"
                  value={inputData.Cors}
                  onChange={inputHandler}
                />
              </div>
              <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                  Link
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="Link"
                  value={inputData.Link}
                  onChange={inputHandler}
                />
              </div>
              <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                  Category
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="Category"
                  value={inputData.Category}
                  onChange={inputHandler}
                />
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button onClick={readValue} className="btn btn-success">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApiAdd;
