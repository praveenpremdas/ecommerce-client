import React from "react";
import { useHistory } from "react-router-dom";

export default function AddAnotherProduct() {
  const history = useHistory();

  const goToAddProduct = () => {
    history.push("/addProduct");
  };

  const goToAdminPanel = () => {
    history.push("/admin");
  };

  return (
    <div className="container-fluid" style={{ height: "100vh" }}>
      <div className="row justify-content-center align-items-center h-100 ">
        <div className="col col-sm-6 col-md-6 col-lg-4 col-xl-3">
          <form action>
            <div className="form-group">
              <button
                className="btn btn-info btn-lg btn-block"
                onClick={goToAddProduct}
              >
                Add Another Product
              </button>
            </div>
            <h4 className="d-flex justify-content-center">OR</h4>
            <div className="form-group">
              <button
                className="btn btn-info btn-lg btn-block"
                onClick={goToAdminPanel}
              >
                Goto Admin Panel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
