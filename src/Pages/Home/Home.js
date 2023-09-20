import React from "react";
import { useEffect, useState } from "react";
import Api from "../../services/Api";
import { Link } from "react-router-dom";
import "./home.css";

//https://api.themoviedb.org/3/movie/now_playing?api_key=0ac9705aaf63159f0dd6dee108a606ae&language=pt-BR

const Home = () => {
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);
  
  //Quando carregar a minha página, vai fazer a requisição a API
  useEffect(() => {
    async function loadFilmes() {
      //Response está o retorno dos daddos da minha API, Status 200 = OK
      const response = await Api.get("/movie/now_playing", {
        params: {
          api_key: "0ac9705aaf63159f0dd6dee108a606ae",
          language: "pt-BR",
          page: 1,
        },
      });
      // console.log(response.data.results[0]);
      setFilmes(response.data.results);
    }
    loadFilmes();
    setLoading(false);
  }, []);

  console.log("Filmes: ", filmes);

  if (loading) {
    return (
      <div className="loading">
        <h2> Carreganddo filmes...</h2>
      </div>
    );
  };
  
  return (
    <div className="Container">
      <div className="listaFilmes">

        {filmes.map((filme) => {
          return (
            <article key={ filme.id }>
              <strong className="title"> { filme.title } </strong>
              <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title} />

              {/* Vai levar para a rota de filmes com pelo ID */}
              <Link to={`/filme/${filme.id}`}>Acessar</Link> 
              <br /> 
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
