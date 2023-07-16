import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate, Link } from "react-router-dom";
import './Login.css';
import dog from "../assets/dog.jpg";

function Login() {
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
  };

  const [loggedIn, setLoggedIn] = useState(false);
  const [isCorrect, setIsCorrect] = useState(true);

  const validationSchema = yup.object({
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is Required!"),
    password: yup.string().required("Password is Required!"),
  });
  const onSubmit = (values) => {};
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });
  function handleFormSubmit(e) {
    formik.handleSubmit(e);
    var arr = JSON.parse(localStorage.getItem("UserData"));
    if (arr === null) {
      setIsCorrect(!isCorrect);
    } else if (
      arr.some(
        (user) =>
          user.email === formik.values.email &&
          user.password === formik.values.password
      )
    ) {
      let ob = { email: formik.values.email, password: formik.values.password };
      sessionStorage.setItem("userInfo", JSON.stringify(ob));
      setLoggedIn(true);
      navigate("/UserHome", { state: { email: formik.values.email } });
    } else {
      setIsCorrect(!isCorrect);
    }
  }
  return (
    <div>
    <div
      style={{
        backgroundImage: `url(${dog})`,
        backgroundSize: "cover",
        height: "100vh",
        overflow:"hidden"
      }}
    >
      <div className="container">
        <div>
          <div>
            <p>
              Login to your Profile to Begin.
            </p>
          </div>
          <form onSubmit={handleFormSubmit}>
            <div>
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
              <div className="text-danger">
                {formik.touched.email && formik.errors.email ? (
                  <div>{formik.errors.email}</div>
                ) : null}
              </div>
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="form-control "
                placeholder="Enter Your Password "
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.password}
              ></input>
              <div className="form-error">
                {formik.touched.password && formik.errors.password ? (
                  <div>{formik.errors.password}</div>
                ) : null}
              </div>

              <div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="btn-primary"
                  >
                    Login
                  </button>
                </div>
              </div>
              {isCorrect ? (
                <div></div>
              ) : (
                <div className="text-danger">
                  Username or password is incorrect
                </div>
              )}
            </div>
          </form>
          <div>
            <p className="h5 ">Don't have an Account ?</p>
            <Link to="/Register">
              <button className="btn-primary">
                SignUp Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Login;