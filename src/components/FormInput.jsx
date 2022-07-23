import "./formInput.css";

const FormInput = (props) => {
  const { label, errorMessage, touched, ...inputProps } = props;

  return (
    <div className="form-input">
      <label>{label}</label>
      <input
        {...inputProps}
        className={`${touched && errorMessage && "input-error"}`}
      />
      <span>{touched && errorMessage}</span>
    </div>
  );
};

export default FormInput;
