import axios from 'axios'

const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: '8c6e8e227109e6d7e2f9f4cb50bc1b01',
        language: 'es-ES'
    }
});

export default movieDB;