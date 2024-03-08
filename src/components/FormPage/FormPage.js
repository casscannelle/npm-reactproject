import React from 'react';
import { useForm } from 'react-hook-form';

export default function FormPage() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);

  return (
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
  );
}