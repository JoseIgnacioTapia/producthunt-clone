import React, { useState, useEffect } from "react";
import { FormState, ValidationFunction, FormErrors } from "@/types/types";

const useValidation = (
  initialState: FormState,
  validate: ValidationFunction,
  fn: () => void
) => {
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitForm, setSubmitForm] = useState<boolean>(false);

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
