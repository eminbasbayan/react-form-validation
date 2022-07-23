import "./formInput.css";
import { useField } from "formik";

const FormikComponent = (props) => {
  const { label, errorMessage, touched, ...inputProps } = props;
  const [field, meta] = useField(props);

  return (
    <div className="form-input">
      <label>{label}</label>
      <input
        {...inputProps}
        {...field}
        className={`${meta.touched && meta.error && "input-error"}`}
      />
      <span>{meta.touched && meta.error}</span>
    </div>
  );
};

export default FormikComponent;
