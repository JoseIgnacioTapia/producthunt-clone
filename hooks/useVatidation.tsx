import React, { useState, useEffect } from "react";

const useValidation = (initialState: any, validate: any, fn: () => void) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [submitForm, setSubmitForm] = useState(false);

  useEffect(() => {
    if (submitForm) {
      const noErrors = Object.keys(errors).length === 0;

      if (noErrors) {
        fn();
      }
      setSubmitForm(false);
    }
  }, [errors, fn, submitForm]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errorsValidation = validate(values);
    setErrors(errorsValidation);
    setSubmitForm(true);
  };

  return {
    values,
    errors,
    submitForm,
    handleChange,
    handleSubmit,
  };
};

export default useValidation;
