import styled from "styled-components";

export const InputText = styled.input`
  border: 1px solid var(--gris3);
  padding: 1rem;
  min-width: 300px;
`;

export const InputSubmit = styled.input`
  height: 3rem;
  width: 3rem;
  display: block;
  background-size: 4rem;
  background-image: url("/images/buscar.png");
  background-repeat: no-repeat;
  position: absolute;
  right: 1rem;
  top: 1px;
  background-color: #fff;
  border: none;

  &:hover {
    cursor: pointer;
  }
`;
