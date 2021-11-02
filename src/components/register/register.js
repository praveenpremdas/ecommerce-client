import React, { useState } from "react";
import "./register.css";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

export default function Register() {
  const history = useHistory();
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post(
        "http://localhost:5000/api/auth/register",
        {
          name: name,
          phoneNumber: phoneNumber,
          email: email,
          password: password,
        }
      );
      if (response.status === 201) {
        setTimeout(() => {
          history.push("/login");
        }, 4000);
        toast("User Created Sucessfully");
      }
      console.log(response);
    } catch (error) {
      if (error.response.status === 422) {
        console.log("error");
        const data = error.response.data.errors;
        for (const i in data) {
          toast(data[i].msg);
        }
      } else {
        console.log(error);
      }
    }
  };
  return (
    <section className="container-fluid" style={{ height: "100vh" }}>
      <ToastContainer />
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img
              src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-login-form/draw2.png"
              className="img-fluid"
              alt="Sample"
            />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form>
              {/* Email input */}
              <div className="form-outline mb-4">
                <input
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter your Name"
                />
                <label className="form-label">Name</label>
              </div>
              <div className="form-outline mb-4">
                <input
                  onChange={(e) => {
                    setPhoneNumber(e.target.value);
                  }}
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter a valid Mobile number"
                />
                <label className="form-label">Phone Number</label>
              </div>
              <div className="form-outline mb-4">
                <input
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  type="email"
                  id="form3Example3"
                  className="form-control form-control-lg"
                  placeholder="Enter a valid email address"
                />
                <label className="form-label" htmlFor="form3Example3">
                  Email address
                </label>
              </div>
              {/* Password input */}
              <div className="form-outline mb-3">
                <input
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  type="password"
                  id="form3Example4"
                  className="form-control form-control-lg"
                  placeholder="Enter password"
                />
                <label className="form-label" htmlFor="form3Example4">
                  Password
                </label>
              </div>
              <div className="d-flex justify-content-between align-items-center"></div>
              <div className="text-center text-lg-start mt-4 pt-2">
                <button
                  onClick={handleSubmit}
                  type="button"
                  className="btn btn-primary btn-lg"
                  style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                >
                  Register
                </button>
                <p className="small fw-bold mt-2 pt-1 mb-0">
                  Already have an account?{" "}
                  <Link to="/login" className="link-danger">
                    Login
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
