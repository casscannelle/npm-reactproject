import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';	

const FormPage = () => {
  

  // Estados para armazenar os dados do formulário
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [temGatos, setTemGatos] = useState('');

  // Função para manipular o envio do formulário
  

  return (
    <div className='container-form'>
      <h2>Formulário</h2>
      <form>
        <label>
          Nome:
          <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
        </label>
        <br />

        <label>
          E-mail:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />

        <label>
          Tem gatos?
          <div>
            <label>
              <input
                type="radio"
                value="sim"
                checked={temGatos === 'sim'}
                onChange={() => setTemGatos('sim')}
              />
              Sim
            </label>
            <label>
              <input
                type="radio"
                value="nao"
                checked={temGatos === 'nao'}
                onChange={() => setTemGatos('nao')}
              />
              Não
            </label>
          </div>
        </label>
        <br />

       
      <Button variant="contained" color="secondary">
        Enviar
      </Button>
    
      </form>
    </div>
  );
};

export default FormPage;