import {  useState } from "react";
import validate from "../component/validate";

function useValidate() {
  const [errors, setErrors] = useState({})


  const validateForm = (formData) => {
    setErrors(validate(formData))
  };

  return {
    validateForm,
    errors
  };
}

export default useValidate