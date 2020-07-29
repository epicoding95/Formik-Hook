import React from "react";
import { useFormik } from "formik";
import classes from "./Formik.module.css";
export default function Formik() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      channel: "",
    },
  });

  return (
    <div className={classes.Container}>
      <form className={classes.Container__Form}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          email="email"
          id="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <label htmlFor="channel">Channel</label>
        <input
          type="text"
          name="channel"
          id="channel"
          onChange={formik.handleChange}
          value={formik.values.channel}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}
