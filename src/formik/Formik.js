import React from "react";
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  FieldArray,
  FastField,
} from "formik";
import * as Yup from "yup";
import classes from "./Formik.module.css";
import TextError from "./TextError";
const initialValues = {
  name: "",
  email: "",
  channel: "",
  phoneNumbers: [""],
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
          <ErrorMessage name="name" component={TextError} />
        </div>

        <div className={classes.Container__Form__Control}>
          <label htmlFor="email">Email</label>
          <Field type="text" name="email" id="email" />
          <ErrorMessage name="email" component={TextError} />
        </div>

        <div className={classes.Container__Form__Control}>
          <label htmlFor="channel">Channel</label>
          <Field type="text" name="channel" id="channel" />
          <ErrorMessage name="channel" component={TextError} />
        </div>
        <div className={classes.Container__Form__Control}>
          <label htmlFor="phoneNumbers">phone Numbers</label>
          <FieldArray name="phoneNumbers">
            {(faProps) => {
              const { push, remove, form } = faProps;
              console.log(faProps);
              const { values } = form;
              const { phoneNumbers } = values;

              return (
                <div>
                  {phoneNumbers.map((phoneNumber, index) => (
                    <div key={index}>
                      <Field name={`phoneNumbers[${index}]`} />
                      {index > 0 && (
                        <button
                          style={{ width: "10%" }}
                          type="button"
                          onClick={() => remove(index)}
                        >
                          -
                        </button>
                      )}

                      <button
                        style={{ width: "10%" }}
                        type="button"
                        onClick={() => push("")}
                      >
                        +
                      </button>
                    </div>
                  ))}
                </div>
              );
            }}
          </FieldArray>
        </div>
        <button>Submit</button>
      </Form>
    </Formik>
  );
}
