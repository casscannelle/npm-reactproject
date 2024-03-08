import React, { useState, useEffect } from 'react';

export default function AnswerPage() {
  // Estado para armazenar todas as respostas
  const [allResponses, setAllResponses] = useState([]);

  useEffect(() => {
    // Função para obter e adicionar novas respostas
    const updateResponses = () => {
      const formData = JSON.parse(localStorage.getItem('formData')) || {};
      setAllResponses((prevResponses) => [...prevResponses, formData]);
    };

    // Adiciona a nova resposta à lista de respostas
    updateResponses();

    // Adiciona um listener para futuras mudanças no localStorage
    window.addEventListener('storage', updateResponses);

    // Remove o listener quando o componente é desmontado
    return () => {
      window.removeEventListener('storage', updateResponses);
    };
  }, []); // Executado apenas uma vez durante a montagem do componente

  return (
    <div>
        <h2>Quem já se cadastrou</h2>
      {allResponses.map((response, index) => (
        <div key={index}>
            <div className='container-answer'>
            <p>Nome: {response.Nome}</p>
            <p>E-mail: {response["E-mail"]}</p>
            <p>Já tem gatos: {response.gatos}</p>
            <p>Quantos: {response.Quantos}</p>
            </div>
        </div>
      ))}
    </div>
  );
}
