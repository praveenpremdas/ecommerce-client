import React from "react";

function products() {
  return (
    <section>
      <div className="container-fluid">
        <div className="row p-5">
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 mt-5 d-inline-flex justify-content-center">
            <div
              className="card d-flex justify-content-center"
              style={{ width: "13rem" }}
            >
              <img
                className="card-img-top w-75"
                style={{ margin: "auto" }}
                src="https://m.media-amazon.com/images/I/41sGASjc4-L.jpg"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title text-center">Card title</h5>
                <a href="#" className="btn btn-primary d-flex pl-5">
                  Buy Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default products;
