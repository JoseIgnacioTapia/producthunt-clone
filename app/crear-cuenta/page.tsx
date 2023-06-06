"use client";
import { Field, Form, InputSubmit } from "../components/ui/Form";
import useValidation from "@/hooks/useVatidation";
import validateNewAccount from "@/validation/validateNewAccount";
import { FormState } from "@/types/types";

const STATE_INICIAL: FormState = {
  nombre: "",
  email: "",
  password: "",
};

function CreateAccout(): JSX.Element {
  const { values, errors, submitForm, handleChange, handleSubmit } =
    useValidation(STATE_INICIAL, validateNewAccount, createAccount);

  function createAccount() {
    console.log("Creando cuenta...");
  }

  return (
    <>
      <h1 style={{ textAlign: "center", marginTop: "5rem" }}>Create Account</h1>
      <Form>
        <Field>
          <label htmlFor="name">Nombre</label>
          <input type="text" id="name" placeholder="Tu Nombre" name="nombre" />
        </Field>

        <Field>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Tu Email" name="email" />
        </Field>

        <Field>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Tu plassword"
            name="password"
          />
        </Field>

        <InputSubmit type="submit" value="Crear Cuenta" />
      </Form>
    </>
  );
}

export default CreateAccout;
