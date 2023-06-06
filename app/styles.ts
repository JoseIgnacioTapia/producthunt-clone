"use client";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --gris: #3d3d3d;
    --gris2: #6f6f6f;
    --gris3: #e1e1e1;
    --naranja: #da552f;
  }

  html {
    font-size: 62.5%;
    box-sizing: border-box;
  }
  *,*::before, *:after {
    box-sizing: inherit;
  }
  body {
    font-size: 1.6rem;
    line-height: 1.5;
    font-family: var(--font-albert-sans);
  }
  h1, h2, h3 {
    margin: 0 0 2rem 0;
    line-height: 1.5;
  }
  h1, h2 {
    font-family: var(--font-roboto), serif;
  }
  h3 {
    font-family: var(--font-albert-sans);
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  a {
    text-decoration: none;
  }
`;

export const Title = styled.h1`
  font-size: 3rem;
  color: red;
`;

export const ErrorMessage = styled.p`
  background-color: red;
  padding: 1rem;
  font-family: "PT Sans", sans-serif;
  font-weight: 700;
  font-size: 1.4rem;
  color: #fff;
  text-align: center;
  text-transform: uppercase;
  margin: 2rem 0;
`;
