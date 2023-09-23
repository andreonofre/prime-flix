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


    function handleDelete (id) {
        //Devolve todos os itens que passam na nossa condição menos o que for diferente
        let filterFilmes = movies.filter((item) => {
            return (item.id !== id)
        })
        // alert("Filme Excluído com sucesso!" + id)
        alert("Filme Excluído com sucesso!")
        //Vai receber todos, menos o que eu cliquei
        setMovie(filterFilmes);
        localStorage.setItem("@primeflix", JSON.stringify(filterFilmes))
    }

  return (
    <div className="minhaLIsta">
        <h1>Minha Lista</h1>

        {movies.length === 0 && <span>Você não possui nenhum filme salvo :(</span>}
        <ul>
            {movies.map((item) => {
                return (
                    <li key={item.id}>
                        <span> {item.title} </span>
                        <div>
                            <Link to={`/filme/${item.id}`}>Ver detalhes</Link>
                            <button onClick={() => handleDelete(item.id)}>Excluir</button>
                        </div>
                    </li>
                )
            })}
        </ul>
    </div>
  )
}

export default Favoritos;