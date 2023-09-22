import "./favoritos.css";
import React from 'react'
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Favoritos = () => {

    const [movies, setMovie] = useState([]);

    useEffect (() => {
        const minhaLista = localStorage.getItem("@primeflix")

        setMovie(JSON.parse(minhaLista) || []);
    }, []);


  return (
    <div className="minhaLIsta">
        <h1>Minha Lista</h1>
        <ul>
            {movies.map((item) => {
                return (
                    <li key={item.id}>
                        <span> {item.title} </span>
                        <div>
                            <Link to={`/filme/${item.id}`}>Ver detalhes</Link>
                            <button>Excluir</button>
                        </div>
                    </li>
                )
            })}
        </ul>
    </div>
  )
}

export default Favoritos;