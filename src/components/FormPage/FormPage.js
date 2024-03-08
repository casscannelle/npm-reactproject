import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import IconLabelButtons from '../Button/Button';

const FormPage = () => {
  const navigate = useNavigate();

  // Estados para armazenar os dados do formulário
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [temGatos, setTemGatos] = useState('');

  // Função para manipular o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validação básica
    if (nome.length < 3) {
      alert('O nome deve ter pelo menos 3 caracteres.');
      return;
    }


    // Redireciona as respostas para a AnswersPage
    navigate.push('/answers');
  };

  return (
    <div className='container-form'>
      <h2>Formulário</h2>
      <form onSubmit={handleSubmit}>
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

        <IconLabelButtons />
      </form>
    </div>
  );
};

export default FormPage;