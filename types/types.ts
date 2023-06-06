export type FormState = {
  nombre?: string;
  email?: string;
  password?: string;
};

export type FormErrors = {
  nombre?: string;
  email?: string;
  password?: string;
};

export type ValidationFunction = (values: FormState) => FormErrors;
