import React from "react";
import classes from "./Formik.module.css";

export default function TextError(props) {
  return <div className={classes.Error}>{props.children}</div>;
}
