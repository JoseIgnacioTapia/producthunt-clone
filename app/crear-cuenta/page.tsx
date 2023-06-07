"use client";
import { Field, Form, InputSubmit } from "../components/ui/Form";
import useValidation from "@/hooks/useVatidation";
import validateNewAccount from "@/validation/validateNewAccount";
import { FormState } from "@/types/types";
import { ErrorMessage } from "../styles";

import firebase from "@/firebase";

const STATE_INICIAL: FormState = {
  name: "",
  email: "",
  password: "",
};

function CreateAccout(): JSX.Element {
  const { values, errors, handleChange, handleBlur, handleSubmit } =
    useValidation(STATE_INICIAL, validateNewAccount, createAccount);

  const { name, email, password } = values;

  function createAccount() {
    try {
      firebase.register(name, email, password);
    } catch (error) {
      console.error("Error al crear la cuenta:", (error as Error).message);
    }
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
            name="name"
            value={name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Field>

        {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}

        <Field>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Tu Email"
            name="email"
            value={email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Field>

        {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}

        <Field>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Tu password"
            name="password"
            value={password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Field>

        {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}

        <InputSubmit type="submit" value="Crear Cuenta" />
      </Form>
    </>
  );
}

export default CreateAccout;
