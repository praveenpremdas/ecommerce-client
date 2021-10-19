import React from "react";

export default function footer() {
  return (
    <div>
      <footer className="page-footer font-small indigo">
        {/* Footer Links */}
        <div className="container">
          {/* Grid row*/}
          <div className="row text-center d-flex justify-content-center pt-5 mb-3">
            {/* Grid column */}
            <div className="col-md-2 mb-3">
              <h6 className="text-uppercase font-weight-bold">
                <p>About us</p>
              </h6>
            </div>
            {/* Grid column */}
            {/* Grid column */}
            <div className="col-md-2 mb-3">
              <h6 className="text-uppercase font-weight-bold">
                <p>Products</p>
              </h6>
            </div>
            {/* Grid column */}
            {/* Grid column */}
            <div className="col-md-2 mb-3">
              <h6 className="text-uppercase font-weight-bold">
                <p>Awards</p>
              </h6>
            </div>
            {/* Grid column */}
            {/* Grid column */}
            <div className="col-md-2 mb-3">
              <h6 className="text-uppercase font-weight-bold">
                <p>Help</p>
              </h6>
            </div>
            {/* Grid column */}
            {/* Grid column */}
            <div className="col-md-2 mb-3">
              <h6 className="text-uppercase font-weight-bold">
                <p>Contact</p>
              </h6>
            </div>
            {/* Grid column */}
          </div>
          {/* Grid row*/}
          <hr className="rgba-white-light" style={{ margin: "0 15%" }} />
          {/* Grid row*/}
          <div className="row d-flex text-center justify-content-center mb-md-0 mb-4">
            {/* Grid column */}
            <div className="col-md-8 col-12 mt-5">
              <p style={{ lineHeight: "1.7rem" }}>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur.
              </p>
            </div>
            {/* Grid column */}
          </div>
          {/* Grid row*/}
          <hr
            className="clearfix d-md-none rgba-white-light"
            style={{ margin: "10% 15% 5%" }}
          />
          {/* Grid row*/}
          <div className="row pb-3">
            {/* Grid column */}
            <div className="col-md-12">
              <div className="mb-5 flex-center">
                {/* Facebook */}
                <p className="fb-ic">
                  <i className="fab fa-facebook-f fa-lg white-text mr-4"> </i>
                </p>
                {/* Twitter */}
                <p className="tw-ic">
                  <i className="fab fa-twitter fa-lg white-text mr-4"> </i>
                </p>
                {/* Google +*/}
                <p className="gplus-ic">
                  <i className="fab fa-google-plus-g fa-lg white-text mr-4">
                    {" "}
                  </i>
                </p>
                {/*Linkedin */}
                <p className="li-ic">
                  <i className="fab fa-linkedin-in fa-lg white-text mr-4"> </i>
                </p>
                {/*Instagram*/}
                <p className="ins-ic">
                  <i className="fab fa-instagram fa-lg white-text mr-4"> </i>
                </p>
                {/*Pinterest*/}
                <p className="pin-ic">
                  <i className="fab fa-pinterest fa-lg white-text"> </i>
                </p>
              </div>
            </div>
            {/* Grid column */}
          </div>
          {/* Grid row*/}
        </div>
        {/* Footer Links */}
        {/* Copyright */}
        <div className="footer-copyright text-center py-3">
          © 2020 Copyright:
          <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
        </div>
        {/* Copyright */}
      </footer>
    </div>
  );
}
