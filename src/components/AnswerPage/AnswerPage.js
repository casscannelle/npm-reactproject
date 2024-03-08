import React, { useState, useEffect } from 'react';
import { isEqual } from 'lodash';
import { object, string, number, boolean } from 'yup';

export default function AnswerPage() {
  // Estado para armazenar todas as respostas
  const [allResponses, setAllResponses] = useState([]);

  // Estado para armazenar a última resposta adicionada
  const [lastResponse, setLastResponse] = useState({});

  useEffect(() => {
    // Função para obter e adicionar novas respostas
    const updateResponses = () => {
      const formData = JSON.parse(localStorage.getItem('formData')) || {};

      // Validação de dados usando Yup
      const schema = object({
        Nome: string().required(),
        Email: string().email().required(),
        gatos: boolean().required(),
        quantos: number().min(0).required(),
      });

      try {
        schema.validateSync(formData);
      } catch (error) {
        console.error(error.message);
        return;
      }

      // Verificar se a última resposta é diferente da nova resposta e não é um objeto vazio
      if (JSON.stringify(lastResponse) !== JSON.stringify(formData) && Object.keys(formData).length !== 0) {
        // Check if the response is already in the list
        const isResponseAlreadyAdded = allResponses.some((response) => {
          // Comparação de objetos usando Lodash
          return isEqual(response, formData);
        });

        if (!isResponseAlreadyAdded) {
          setAllResponses((prevResponses) => [...prevResponses, formData]);
        }

        // Atualizar o estado da última resposta
        setLastResponse(formData);
      }
    };

    // Adiciona a nova resposta à lista de respostas
    updateResponses();

    // Adiciona um listener para futuras mudanças no localStorage
    window.addEventListener('storage', updateResponses);

    // Remove o listener quando o componente é desmontado
    return () => {
      window.removeEventListener('storage', updateResponses);
    };
  }, [lastResponse]); // Executado sempre que o estado da última resposta for atualizado

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
