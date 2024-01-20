import React from 'react'
import { useFormik } from "formik";
import * as yup from "yup";
import './Signup.css'
const Signup = () => {
  const validationSchema = yup.object({
    username: yup.string().required("Please enter username"),
    password: yup.string().required("Please enter your password "),
  });
   const formik = useFormik({
     initialValues: {
       username: "",
       password: "",
     },
     validationSchema: validationSchema,
     onSubmit: (values) => {
       console.log("Logged in successfully! ", values);
     },
   });

  return (
    <React.Fragment>
      <div className="Signup">
        <div className="container">
          <div className="row">
            <div className="text-center">
              <form onSubmit={formik.handleSubmit}>
                <div>
                  <label htmlFor="username"> username:</label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.username}
                  />
                  {formik.touched.username && formik.errors.username ? (
                    <div>{formik.errors.username}</div>
                  ) : null}
                </div>

                <div>
                  <label htmlFor="password"> password:</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                  />
                  {formik.touched.password && formik.errors.password ? (
                    <div>{formik.errors.password}</div>
                  ) : null}
                </div>

                <button type="submit"> Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Signup