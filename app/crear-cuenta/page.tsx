function CreateAccout(): JSX.Element {
  return (
    <>
      <h1>Create Account</h1>
      <form>
        <div>
          <label htmlFor="name">Nombre</label>
          <input type="text" id="name" placeholder="Tu Nombre" name="nombre" />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Tu Email" name="email" />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Tu plassword"
            name="password"
          />
        </div>

        <input type="submit" value="Crear Cuenta" />
      </form>
    </>
  );
}

export default CreateAccout;
