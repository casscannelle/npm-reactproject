import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

export default function FormPage() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = data => {
    // Salva os dados no localStorage
    localStorage.setItem('formData', JSON.stringify(data));

    // Redireciona para a outra página
    navigate('/answers');  // Modificado aqui
  };

  console.log(errors);

  return (
    <div className='container-form'>
      <h2>Preencha para adotar</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="nome">Nome:</label>
          <input type="text" placeholder="Nome" {...register("Nome", { min: 3 })} />

          <label htmlFor="email">E-mail:</label>
          <input type="email" placeholder="E-mail" {...register("E-mail", { required: true, pattern: /^\S+@\S+$/i })} />

          <label>Já tem gatos?</label>
          <input {...register("Já tem gatos?", { required: true })} type="radio" value="Sim" name="gatos" />
          <input {...register("Já tem gatos?", { required: true })} type="radio" value="Não" name="gatos" />

          <label htmlFor="quantos">Quantos?</label>
          <input type="number" placeholder="Quantos?" {...register("Quantos?", { required: true, min: 0 })} />

          <input type="submit" />
        </form>
    </div>
  );
}
