const axios = require('axios');
const chaveAPI = process.env.API_KEY
const baseURL = 'https://api.themoviedb.org/3'

//Utiliza o recurso Discover da API TMDB
async function discover(){
    try{
        const result = await axios.get(`${baseURL}/discover/movie?api_key=${chaveAPI}&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`);
        //console.log(result.data)
        return result.data  
       
    } catch (error) {
        console.error(error.response.status)
        return error.response.status
    }
}


//Utiliza o recurso get details de Lists da API TMDB
async function lista(id) {
    try {const result = await axios.get(`${baseURL}/list/${id}?api_key=${chaveAPI}&language=pt-BR`)
        //console.log(result.data.items)
        return result.data.items
        
    } catch (error) {
        console.error(error)
        return error.response.status
    }
}


//Utiliza o recurso get details de Movies da API TMDB
async function movie(id) {
    try{
        const result = await axios.get(`${baseURL}/movie/${id}?api_key=${chaveAPI}&language=pt-BR`)
        //console.log(result.data)
        return result.data
    } catch (error) {
        console.error(error)
        return error.response.status
    }
}

module.exports = {discover, movie, lista}