import React, { useState } from "react";
import { useFormik } from "formik";
import wallpaper from "../assets/wallpaper.avif";
import * as yup from "yup";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './Register.css';

function Register() {
  const navigate = useNavigate();

  const [flag, setFlag] = useState(false);
  const [isAlreadyExist, setIsAlreadyExist] = useState(false);

  const initialValues = {
    email: "",
    password: "",
    name: "",
  };

  const onSubmit = (values) => {};

  const validationSchema = yup.object({
    name: yup.string().required("Required!"),
    email: yup.string().email("Invalid email format").required("Required!"),
    password: yup
      .string()
      .required("Required!")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Must Contain at least 8 Characters with One Uppercase, One Lowercase, One Numeric, and One Special Character"
      ),
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  function handleFormSubmit(e) {
    formik.handleSubmit(e);
    if (!formik.values.email || !formik.values.password || !formik.values.name) {
      setFlag(true);
    } else {
      setFlag(false);
      let ob = {
        name: formik.values.name,
        email: formik.values.email,
        password: formik.values.password,
      };
      let olddata = localStorage.getItem("UserData");
      if (olddata == null) {
        olddata = [];
        olddata.push(ob);
        localStorage.setItem("UserData", JSON.stringify(olddata));
      } else {
        let oldArr = JSON.parse(olddata);
        if (oldArr.some((user) => user.email === formik.values.email)) {
          setIsAlreadyExist(!isAlreadyExist);
        } else {
          oldArr.push(ob);
          localStorage.setItem("UserData", JSON.stringify(oldArr));
          console.log(oldArr, "Registered");
          alert("Registered Successfully!!! Please Login Now");
          navigate("/login");
        }
      }
    }
  }

  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${wallpaper})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "100vh",
        }}
      >
        <form onSubmit={handleFormSubmit}>
          <div className="form-container">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="string"
              id="name"
              name="name"
              className="form-control"
              placeholder="Enter Your Name"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.name}
            ></input>
            {formik.touched.name && formik.errors.name && (
              <div className="error">{formik.errors.name}</div>
            )}

            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              placeholder="Enter Your Email"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.email}
            ></input>
            {formik.touched.email && formik.errors.email && (
              <div className="error">{formik.errors.email}</div>
            )}

            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-control"
              placeholder="Enter Your Password"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.password}
            ></input>
            {formik.touched.password && formik.errors.password && (
              <div className="error">{formik.errors.password}</div>
            )}

            <div className="text-center">
              <button type="submit" className="btn-primary2">
                Register
              </button>
            </div>

            {isAlreadyExist && (
              <div className="text-danger">
                This User already exists in the database. Please continue to Login.
              </div>
            )}
          </div>
        </form>

        <div className="registered-section">
          <span>Already Registered!!!</span>
          <Link to="/Login">
            <button className="btn-primary3">Login Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
