import React from "react";
import { useNavigate } from "react-router";


const navigate = useNavigate();
const handleSubmit = (e) => {

   
    
    e.preventDefault();


    // Redireciona as respostas para a AnswersPage
    navigate.push('/answers');
  };

  export default handleSubmit;