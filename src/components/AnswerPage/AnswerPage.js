import React, { useState, useEffect } from 'react';

const AnswerPage = () => {
  const [allResponses, setAllResponses] = useState([]);

  useEffect(() => {
    const updateResponses = () => {
      const formData = JSON.parse(localStorage.getItem('formData')) || {};

      // Verificar se a última resposta é diferente
      if (Object.keys(formData).length !== 0) {
        // Verificar se a resposta não está na lista
        const isResponseAlreadyAdded = allResponses.some((response) => {
          return JSON.stringify(response) === JSON.stringify(formData);
        });

        if (!isResponseAlreadyAdded) {
          setAllResponses((prevResponses) => [...prevResponses, formData]);

          // Exibir os dados no console
          console.log('Nova resposta:', formData);
        }
      }
    };

    updateResponses();

    window.addEventListener('storage', updateResponses);

    return () => {
      window.removeEventListener('storage', updateResponses);
    };
  }, [allResponses]);

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
};

export default AnswerPage;