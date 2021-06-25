import axios from 'axios';

const movieDB = axios.create({
    baseURL:'https://api.themoviedb.org/3/movie',
    params:{
        api_key:'568f0c60273063c49307f18b57ce33fd',
        language: 'es-US'
    }
});

export default movieDB;