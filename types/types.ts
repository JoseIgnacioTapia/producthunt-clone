export type FormState = {
  name?: string;
  email?: string;
  password?: string;
};

export type FormErrors = {
  name?: string;
  email?: string;
  password?: string;
};

export type ValidationFunction = (values: FormState) => FormErrors;
