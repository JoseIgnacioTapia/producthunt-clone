import { InputText, InputSubmit } from "./SearchStyle";

function Search(): JSX.Element {
  return (
    <form style={{ position: "relative" }}>
      <InputText type="text" placeholder="Buscar productos" />
      <InputSubmit type="submit" value="" />
    </form>
  );
}

export default Search;
