import React from "react";

export const Alert = () => (
  <div className="alert alert-warning" role="alert" style={{ marginBottom: 0 }}>
    <strong>Atenção!</strong> Estamos em fase de testes. Conheça as melhorias
    previstas e envie sugestões{" "}
    <a
      href="https://docs.google.com/forms/d/e/1FAIpQLSdt8YXI3i7RdolEMh-TX1oes5zGpSnbE3Sy3-ioVLJTqvgGVQ/viewform"
      taget="_blank"
      style={{ textDecoration: "underline" }}
    >
      aqui.
    </a>
    <br />
    <small>
      Nota: Centro de Educação Infantil, ou CEI, é o termo tecnicamente mais
      correto. Decidimos utilizar "creche" devido ao seu maior uso fora da SME.
    </small>
  </div>
);
