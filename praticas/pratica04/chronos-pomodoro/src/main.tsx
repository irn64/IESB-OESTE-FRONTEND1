import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <>
      console.log('oi')
      <h1>Bem-vindo a primeira aula de ReactJs</h1>
      <h2>Isso ai</h2>
    </>
  </StrictMode>,
);
