import { useState } from "react";
import "./formInput.css";

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { id, onChange, label, errorMessage, ...inputProps } = props;

  return (
    <div className="form-input">
      <label>{label}</label>
      <input
        name={props.name}
        type="text"
        {...inputProps}
        onChange={onChange}
        focused={focused.toString()}
        onBlur={() => setFocused(true)}
        onFocus={() =>
          inputProps.name === "confirmPassword" && setFocused(true)
        }
      />
      <span>{errorMessage}</span>
    </div>
  );
};

export default FormInput;
