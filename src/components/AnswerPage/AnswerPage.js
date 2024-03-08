import React from 'react';

export default function AnswerPage() {
  // Obtém os dados do localStorage
  const formData = JSON.parse(localStorage.getItem('formData')) || {};

  return (
    <div>
      <h2>Dados do Formulário</h2>
      <p>Nome: {formData.Nome}</p>
      <p>E-mail: {formData["E-mail"]}</p>
      <p>Já tem gatos: {formData.gatos}</p>
      <p>Quantos: {formData.quantos}</p>
      {/* Exibir outros dados do formulário aqui */}
    </div>
  );
}
