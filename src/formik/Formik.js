import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import classes from "./Formik.module.css";

const initialValues = {
  name: "",
  email: "",
  channel: "",
};
const onSubmit = (values) => {
  console.log(values);
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email format").required("Required"),
  channel: Yup.string().required("Required"),
});
export default function FormikFile() {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <div className={classes.Container__Form__Control}>
          <label htmlFor="name">Name</label>
          <Field type="text" name="name" id="name" />
          <ErrorMessage name="name" />
        </div>

        <div className={classes.Container__Form__Control}>
          <label htmlFor="email">Email</label>
          <Field type="text" name="email" id="email" />
          <ErrorMessage name="email" />
        </div>

        <div className={classes.Container__Form__Control}>
          <label htmlFor="channel">Channel</label>
          <Field type="text" name="channel" id="channel" />
          <ErrorMessage name="channel" />
        </div>

        <button>Submit</button>
      </Form>
    </Formik>
  );
}
