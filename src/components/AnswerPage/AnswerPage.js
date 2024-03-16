import React, { useState, useEffect } from 'react';

const AnswerPage = () => {
 const [responses, setResponses] = useState([]);

 useEffect(() => {
  const updateResponse = () => {
   const formData = JSON.parse(localStorage.getItem('formData')) || {};
   const storedResponses = JSON.parse(localStorage.getItem('formResponses')) || [];

   if (Object.keys(formData).length !== 0) {
    const isNewResponse = !storedResponses.some(response => JSON.stringify(response) === JSON.stringify(formData));

    if (isNewResponse) {
     const updatedResponses = [...storedResponses, formData];
     localStorage.setItem('formResponses', JSON.stringify(updatedResponses));
     setResponses(updatedResponses);
    }
   }
  };

  updateResponse();

  window.addEventListener('storage', updateResponse);

  return () => {
   window.removeEventListener('storage', updateResponse);
  };
 }, []);

 return (
  <div>
   <h2>Quem já se cadastrou</h2>
   {responses.map((response, index) => (
    <div key={index} className='container-answer'>
     <p>Nome: {response.nome}</p>
     <p>E-mail: {response.email}</p>
     <p>Já tem gatos: {response.temGatos}</p>
    </div>
   ))}
  </div>
 );
};

export default AnswerPage;
