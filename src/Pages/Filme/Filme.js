import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Api from '../../services/Api';



const Filme = () => {
  //pegando o meu ID ao clicar no link que direciona pra essa rota
  const { id } = useParams(); 
  const [filme, setFilme] = useState({});
  const [load, setLoad] = useState(true);


  useEffect(() => {
    async function loadFilme () {
      await Api.get(`/movie/${id}`, {
        params:{
          api_key: "0ac9705aaf63159f0dd6dee108a606ae",
          language: "pt-BR",
        } 
      }).then((reponse) => {
        setFilme(reponse.data);
        setLoad(false);
      })
      .catch(() => {
        console.log("Filme não encontrado")
      })
    };

    loadFilme();

   

    return () => {
      console.log("Componente desmontou.")
    };
  },[]);



//se estiver carregando a requisição faz isso, depois seta como falso lá em cima e pula pra baixo
  if (load) {
    return (
      <div className='filme-info'>
        <h1>Carregando detalhes...</h1>
      </div>
    );
  };

  return (
    <div className='filme-info'>
      <h1> {filme.title} </h1>
       <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title} />
       <h3>Sinopse</h3>
       <span> {filme.overview} </span>

       <strong>Avaliação: {filme.vote_average} /10</strong>
    </div>
  );
};

export default Filme;