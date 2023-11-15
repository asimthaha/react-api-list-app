import React, { useEffect, useState } from "react";
import axios from "axios";
import ApiNavbar from "./ApiNavbar";

const ApiView = () => {
  const [isLoading, changeLoading] = useState(true);

  const [data, changeData] = useState([]);

  const fetchData = () => {
    axios.get("https://api.publicapis.org/entries").then((response) => {
      changeData(response.data.entries);
      changeLoading(false);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <ApiNavbar />
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="row g-3">
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">API</th>
                      <th scope="col">Description</th>
                      <th scope="col">Auth</th>
                      <th scope="col">Https</th>
                      <th scope="col">Cors</th>
                      <th scope="col">Link</th>
                      <th scope="col">Category</th>
                    </tr>
                  </thead>
                  <tbody>
                    {isLoading ? (
                      <button class="btn btn-primary" type="button" disabled>
                        <span
                          class="spinner-grow spinner-grow-sm"
                          role="status"
                          aria-hidden="true"
                        ></span>
                        <span class="visually-hidden">Loading...</span>
                      </button>
                    ) : (
                      data.map((value, index) => {
                        return (
                          <tr>
                            <th scope="row">{value.API}</th>
                            <td>{value.Description}</td>
                            <td>{value.Auth}</td>
                            <td>{value.HTTPS.toString()}</td>
                            <td>{value.Cors}</td>
                            <td>{value.Link}</td>
                            <td>{value.Category}</td>
                          </tr>
                        );
                      })
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApiView;
