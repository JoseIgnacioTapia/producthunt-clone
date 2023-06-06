"use client";
import { Field, Form, InputSubmit } from "../components/ui/Form";
import useValidation from "@/hooks/useVatidation";
import validateNewAccount from "@/validation/validateNewAccount";
import { FormState } from "@/types/types";

const STATE_INICIAL: FormState = {
  name: "",
  email: "",
  password: "",
};

function CreateAccout(): JSX.Element {
  const { values, errors, submitForm, handleChange, handleSubmit } =
    useValidation(STATE_INICIAL, validateNewAccount, createAccount);

  const { name, email, password } = values;

  function createAccount() {
    console.log("Creando cuenta...");
  }

  return (
    <>
      <h1 style={{ textAlign: "center", marginTop: "5rem" }}>Create Account</h1>
      <Form onSubmit={handleSubmit} noValidate>
        <Field>
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            id="name"
            placeholder="Tu Nombre"
            name="nombre"
            value={name}
            onChange={handleChange}
          />
        </Field>

        <Field>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Tu Email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </Field>

        <Field>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Tu password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </Field>

        <InputSubmit type="submit" value="Crear Cuenta" />
      </Form>
    </>
  );
}

export default CreateAccout;
