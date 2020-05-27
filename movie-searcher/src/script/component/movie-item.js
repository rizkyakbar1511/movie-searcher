class MovieItem extends HTMLElement {
  constructor(){
    super();
    this.shadowDom = this.attachShadow({mode: "open"})
  }
   set movie(movie) {
       this._movie = movie;
       this.render();
   }

   render() {
       this.shadowDom.innerHTML = `
             <style>
               @import "../node_modules/@fortawesome/fontawesome-free/css/all.css";
               * {
                   margin: 0;
                   padding: 0;
                   box-sizing: border-box;
               }
               :host {
                   margin-top: 80px;
                   display: block;
                   margin-bottom: 18px;
                   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                   border-radius: 10px;
                   overflow: hidden;
               }

               .movie-img {
                   width: 100%;
                   max-height: 300px;
                   object-fit: cover;
                   object-position: center;
               }

               .movie-info {
                   padding: 24px;
               }

               .movie-info > h2 {
                   font-weight: lighter;
               }

               .movie-info > h3 {
                   margin: 15px 0;
               }

               .movie-info > p {
                   margin-top: 10px;
                   overflow: hidden;
                   text-overflow: ellipsis;
                   display: -webkit-box;
                   -webkit-box-orient: vertical;
                   -webkit-line-clamp: 10; /* number of lines to show */
               }

               .movie-info h4 i{
                 color: orange;
               }
           </style>
           <img class="movie-img" src="https://image.tmdb.org/t/p/original/${this._movie.poster_path}" alt="Error : No Image In API Source">
           <div class="movie-info">
               <h2>${this._movie.title}</h2>
               <h3>Released Date : ${this._movie.release_date}</h3>
               <h3>Language : ${this._movie.original_language}</h3>
               <h4>Rating <i class="fas fa-star"></i> ${this._movie.vote_average}</h4>
               <p>${this._movie.overview}</p>
           </div>`;
   }
}

customElements.define("movie-item", MovieItem);
