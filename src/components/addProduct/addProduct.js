import React, { useState } from "react";
import add from "../../assets/add.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useHistory, useLocation } from "react-router-dom";

export default function AddProduct(props) {
  const history = useHistory();
  const location = useLocation();
  const purpose = props.purpose;

  const [productDetails, setProductDetail] = useState({
    productName: "",
    price: "",
    rating: "",
    offers: "",
    seller: "",
    stock: "",
    catagory: "",
    productDiscription: "",
    image: null,
    uploadProgress: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    setProductDetail({
      ...productDetails,
      [e.target.name]: e.target.value,
    });
  };
  const imageHandler = (e) => {
    setProductDetail({
      ...productDetails,
      image: e.target.files[0],
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (purpose === "addProduct") {
      if (
        productDetails.productName === "" ||
        productDetails.price === "" ||
        productDetails.rating === "" ||
        productDetails.offers === "" ||
        productDetails.seller === "" ||
        productDetails.stock === "" ||
        productDetails.catagory === "" ||
        productDetails.productDiscription === "" ||
        productDetails.image === null
      ) {
        toast("Please fill the required fields");
      } else {
        const fd = new FormData();
        for (const i in productDetails) {
          fd.append(i, productDetails[i]);
        }

        axios
          .post("http://localhost:5000/api/admin/addProduct", fd, {
            onDownloadProgress: (ProgressEvent) => {
              setProductDetail({
                ...productDetails,
                uploadProgress:
                  "Upload progress" +
                  Math.round(
                    (ProgressEvent.loaded / ProgressEvent.total) * 100
                  ) +
                  "%",
              });
              console.log(
                "Upload progress" +
                  Math.round(
                    (ProgressEvent.loaded / ProgressEvent.total) * 100
                  ) +
                  "%"
              );
            },
          })
          .then(function (response) {
            console.log(response);
            alert(`Product Added product ID = ${response.data}`);
            history.push("/addAnotherProduct");
          })
          .catch(function (error) {
            console.log(error);
            toast(error);
          });
      }
    }

    if (purpose === "productUpdation") {
      const fd = new FormData();
      fd.append("_id", location.state.productId);
      for (const i in productDetails) {
        if (productDetails[i] !== "" && productDetails[i] !== null) {
          fd.append(i, productDetails[i]);
          console.log(productDetails[i]);
        }
      }

      const response = await axios.post(
        "http://localhost:5000/api/admin/productUpdation",
        fd
      );
      console.log(response.data);
      if (response.data === "sucess") {
        toast("Product sucessfully Updated");
        setTimeout(() => history.push("/viewProducts"), 4000);
      } else {
        toast("Updation Failed");
        setTimeout(() => history.push("/viewProducts"), 4000);
      }
    }
  };

  return (
    <div
      className="container-fluid  bg-info "
      style={{ height: "100%", padding: "10%" }}
    >
      <div className="contact-image">
        <img src={add} alt="add_product" />
      </div>
      <form method="post">
        <h3>Add New Product</h3>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <input
                onChange={handleChange}
                type="text"
                name="productName"
                className="form-control"
                placeholder="Product Name *"
              />
            </div>
            <div className="form-group">
              <input
                onChange={handleChange}
                type="text"
                name="price"
                className="form-control"
                placeholder="Price *"
              />
            </div>
            <div className="form-group">
              <input
                onChange={handleChange}
                type="text"
                name="rating"
                className="form-control"
                placeholder="Rating Out Of 5 *"
              />
            </div>
            <div className="form-group">
              <input
                onChange={handleChange}
                type="text"
                name="offers"
                className="form-control"
                placeholder="Offers *"
              />
            </div>

            <div className="form-group">
              <input
                onChange={handleChange}
                type="text"
                name="seller"
                className="form-control"
                placeholder="Seller *"
              />
            </div>

            <form>
              <div className="form-row align-items-center mb-3">
                <div className="col-auto my-1">
                  <label className="mr-sm-2" htmlFor="inlineFormCustomSelect">
                    Product Status
                  </label>
                  <select
                    className="custom-select mr-sm-2"
                    id="inlineFormCustomSelect"
                    name="stock"
                    onChange={handleChange}
                  >
                    <option selected>Choose...</option>
                    <option value="In Stock">In Stock</option>
                    <option value="Out Of Stock">Out Of Stock</option>
                  </select>
                </div>
              </div>
            </form>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <input
                onChange={handleChange}
                type="text"
                name="catagory"
                className="form-control"
                placeholder="Catagory *"
              />
            </div>

            <div className="custom-file mb-3">
              <input
                onChange={imageHandler}
                inputProps={{ accept: "image/*" }}
                name="image"
                type="file"
                className="custom-file-input"
                id="validatedCustomFile"
                required
              />
              <label
                className="custom-file-label"
                htmlFor="validatedCustomFile"
              >
                Upload Image...
              </label>
            </div>

            <div className="form-group">
              <textarea
                onChange={handleChange}
                name="productDiscription"
                className="form-control"
                placeholder="Product Discription *"
                style={{ width: "100%", height: "150px" }}
                defaultValue={""}
              />
            </div>
            <div>
              <h4>{productDetails.uploadProgress}</h4>
            </div>
          </div>
        </div>
      </form>
      <div className="form-group">
        <button
          onClick={handleSubmit}
          className="btn btn-ligh btn-lg btn-block"
        >
          ADD
        </button>
      </div>
      <ToastContainer />
    </div>
  );
}
