import React from 'react'
import { useEffect, useState } from 'react';
import Api from '../../services/Api';

//https://api.themoviedb.org/3/movie/now_playing?api_key=0ac9705aaf63159f0dd6dee108a606ae&language=pt-BR

const Home = () => {
  const [filmes, setFilmes] = useState([]);


  //Quando carregar a minha página, vai fazer a requisição a API
  useEffect(() => {
    async function loadFilmes () {
      const response = await Api.get("/movie/now_playing", {
        params: {
          api_key: "0ac9705aaf63159f0dd6dee108a606ae",
          language: "pt-BR",
          page: 1,
        }
      });
      console.log(response.data.results[0]);
    };
    loadFilmes();
  },[]);


  return (
    <div>
        <h1>Bem vindo a página HOME</h1>
    </div>
  );
};

export default Home;