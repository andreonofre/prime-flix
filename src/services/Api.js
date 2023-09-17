import axios from "axios";

//Base da URL: https://api.themoviedb.org/3/
//https://api.themoviedb.org/3/movie/now_playing?api_key=0ac9705aaf63159f0dd6dee108a606ae&language=pt-BR


const Api = axios.create({
    baseURL: "https://api.themoviedb.org/3/"
});

export default Api;