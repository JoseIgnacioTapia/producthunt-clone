"use client";
import { Field, Form, InputSubmit } from "../components/ui/Form";

function CreateAccout(): JSX.Element {
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
