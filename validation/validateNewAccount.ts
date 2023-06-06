import { FormState, FormErrors } from "@/types/types";

export default function validateNewAccount(values: FormState) {
  let errors: FormErrors = {};

  if (!values.name) {
    errors.name = "El nombre es obligatorio";
  }

  if (!values.email) {
    errors.email = "El email es obligatorio.";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Email no valido.";
  }

  if (!values.password) {
    errors.password = "El password es obligatorio";
  } else if (values.password.length < 6) {
    errors.password = "El password debe ser de al menos 6 carcateres";
  }

  return errors;
}
