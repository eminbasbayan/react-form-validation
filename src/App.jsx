import { useState } from "react";
import "./App.css";
import FormInput from "./components/FormInput";

function App() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    required: true,
  });

  const [isLoading, setIsLoading] = useState(true);

  const inputs = [
    {
      id: 1,
      name: "username",
      label: "Username",
      type: "text",
      placeholder: "Enter your username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't character!",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "Enter your email",
      errorMessage: "It should be a valid email address!",
      required: true,
    },
    {
      id: 3,
      name: "password",
      label: "Password",
      type: "password",
      placeholder: "Enter your password",
      pattern:
        "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      required: true,
    },
    {
      id: 4,
      name: "confirmPassword",
      label: "Confirm Password",
      type: "password",
      placeholder: "Enter your Confirm Password",
      pattern: values.password,
      errorMessage: "Passwords don't match!",
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(false);
    setTimeout(() => {
      setIsLoading(true);
    }, 3000);
  };

  const onChange = (e) => {
    e.preventDefault();
    setValues({ ...values, [e.target.name]: e.target.value });
    console.log(values);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        {inputs.map((input) => (
          <FormInput key={input.id} onChange={onChange} {...input} />
        ))}
        <button>{isLoading ? "Submit" : "Loading..."}</button>
      </form>
    </div>
  );
}

export default App;
