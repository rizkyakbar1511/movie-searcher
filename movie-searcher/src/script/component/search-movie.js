class SearchMovie extends HTMLElement {
  constructor(){
    super();
    this.shadowDOM = this.attachShadow({mode: "open"});
  }

  connectedCallback(){
    this.render();
  }

  set clickEvent(event){
    this._clickEvent = event;
    this.render();
  }

  get value() {
       return this.shadowDOM.querySelector("#searchMovie").value;
   };

  render(){
    this.shadowDOM.innerHTML = `
    <style>
      @import "../node_modules/@fortawesome/fontawesome-free/css/all.css";
      .search-container {
        max-width: 800px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        padding: 16px;
        border-radius: 5px;
        display: flex;
        position: sticky;
        top: 10px;
        background-color: white;
      }

      .search-container > input {
        width: 75%;
        padding: 16px;
        border: 0;
        border-bottom: 1px solid black;
        font-weight: bold;
      }

      .search-container > input:focus {
        outline: 0;
        border-bottom: 2px solid cornflowerblue;
      }

      .search-container > input:focus::placeholder {
        font-weight: bold;
      }

      .search-container >  input::placeholder {
        color: black;
        font-weight: normal;
      }

      .search-container > button {
        width: 23%;
        cursor: pointer;
        margin-left: auto;
        padding: 16px;
        background-color: #eb2a08;
        color: white;
        border: 0;
        border-radius: 10px;
        text-transform: uppercase;
      }

      .search-container button i{
          font-size: 18px;
      }

      @media screen and (max-width: 550px){
        .search-container {
            flex-direction: column;
            position: static;
        }

        .search-container > input {
            width: 100%;
            margin-bottom: 12px;
        }

        .search-container > button {
            width: 100%;
        }

      }
      </style>
      <div id="search-container" class="search-container">
          <input placeholder="Type your movie name here . . ." id="searchMovie" type="search">
          <button id="searchButtonElement" type="submit"><i class="fas fa-search-plus"></i> Search</button>
      </div>
    `;
    this.shadowDOM.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
  }
}


customElements.define("search-movie", SearchMovie);
