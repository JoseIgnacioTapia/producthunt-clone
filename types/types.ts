export type FormState = {
  name?: string | null | undefined;
  email?: string | undefined;
  password?: string | undefined;
};

export type FormErrors = {
  name?: string;
  email?: string;
  password?: string;
};

export type ValidationFunction = (values: FormState) => FormErrors;
