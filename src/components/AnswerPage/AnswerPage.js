import React, { useState, useEffect } from 'react';

export default function AnswerPage() {
  const [allResponses, setAllResponses] = useState([]);
  const [lastResponse, setLastResponse] = useState({});

  useEffect(() => {
    const updateResponses = () => {
      const formData = JSON.parse(localStorage.getItem('formData')) || {};

    

      // Verificar se a última resposta é diferente
      if (JSON.stringify(lastResponse) !== JSON.stringify(formData) && Object.keys(formData).length !== 0) {
        // Verificar se a resposta não está na lista
        const isResponseAlreadyAdded = allResponses.some((response) => {
          return JSON.stringify(response) === JSON.stringify(formData);
        });

        if (!isResponseAlreadyAdded) {
          setAllResponses((prevResponses) => [...prevResponses, formData]);

          // Exibir os dados no console
          console.log('Nova resposta:', formData);
        }

        // Atualizar o estado da última resposta
        setLastResponse(formData);
      }
    };

    updateResponses();

    window.addEventListener('storage', updateResponses);

    return () => {
      window.removeEventListener('storage', updateResponses);
    };
  }, [lastResponse]);

  return (
    <div>
      <h2>Quem já se cadastrou</h2>
      {allResponses.map((response, index) => (
        <div key={index}>
          <div className='container-answer'>
            <p>Nome: {response.nome}</p>
            <p>E-mail: {response.email}</p>
            <p>Já tem gatos: {response.temGatos}</p>
          </div>
        </div>
      ))}
    </div>
  );
}