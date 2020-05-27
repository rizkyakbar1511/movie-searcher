class MovieHeader extends HTMLElement {
  constructor(){
    super();
    this.shadowDom = this.attachShadow({mode: "open"});
  }

  connectedCallback(){
    this.render();
  }

  render(){
    this.shadowDom.innerHTML = `
    <style>
        @import "../node_modules/@fortawesome/fontawesome-free/css/all.css";
         * {
             margin: 0;
             padding: 0;
             box-sizing: border-box;
         }
         :host {
             display: flex;
             width: 100%;
             background-color: black;
             color: white;
             box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
         }
         h2 {
             align-self: center;
             padding: 16px;
             flex-basis: 90%;
         }
         h2 span{
           color: #eb2a08;
         }

         .credit-container{
           flex-basis: 10%;
         }

         h3 span{
           color: #1558ec;
         }

         h3 > a {
           display:block;
           width: 80px;
         }
     </style>
    <h2><i class="fas fa-film"></i> <span>Movie</span> Searcher</h2>
    <div class="credit-container">
      <h3><span>Powered </span>By   <a href="https://www.themoviedb.org/documentation/api" target="_blank"><img src="//www.themoviedb.org/assets/1/v4/logos/primary-green-d70eebe18a5eb5b166d5c1ef0796715b8d1a2cbc698f96d311d62f894ae87085.svg"></a></h3>
    </div>
    `;
  }
}

customElements.define("movie-header", MovieHeader);
