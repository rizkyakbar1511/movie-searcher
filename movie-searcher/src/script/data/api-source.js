class ApiSource{

    static searchMovie(keyword){
        const apiKey  = "263af0079f2831a29212b693115edb4f";
        const baseUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${keyword}&page=1&include_adult=false`
        return fetch(`${baseUrl}`)

          .then(response => {
            return response.json()
          })
          .then(responseJson => {
            if(responseJson.results){
              return Promise.resolve(responseJson.results);
            }else{
              return Promise.reject(`${keyword} is not found`);
            }
          })
      }
}

export default ApiSource;
