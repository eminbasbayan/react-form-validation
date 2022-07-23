import React from "react";
import { Form, Formik } from "formik";
import { inputSchema } from "./schemas";
import FormikComponent from "./components/FormikComponent";

const Formik2 = () => {
  const inputs = [
    {
      id: 1,
      name: "username",
      label: "Username",
      type: "text",
      placeholder: "Enter your username",
    },
    {
      id: 2,
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "Enter your email",
    },
    {
      id: 3,
      name: "password",
      label: "Password",
      type: "password",
      placeholder: "Enter your password",
    },
    {
      id: 4,
      name: "confirmPassword",
      label: "Confirm Password",
      type: "password",
      placeholder: "Enter your Confirm Password",
    },
  ];

  return (
    <Formik
      validationSchema={inputSchema}
      initialValues={{
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      onSubmit={(values, { resetForm, setSubmitting }) => {
        setSubmitting(true);
        setTimeout(() => {
          resetForm();
          setSubmitting(false);
        }, 3000);
      }}
    >
      {(props) => (
        <Form>
          <h1>Register</h1>
          {inputs.map((input) => (
            <FormikComponent key={input.id} {...input} />
          ))}
          <button type="submit" disabled={props.isSubmitting}>
            {props.isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default Formik2;
