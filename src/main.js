const searchTitle = document.getElementById("search-title");
let url = "http://www.omdbapi.com/?s=series&apikey=7ef620f9";
fetch(url)
  .then(result => result.json())
  .then(result => {
    let arrData = result.Search;
    template(arrData);
  })
  .catch(error => console.log(error));
let clear = " ";
const template = valuesData => {
  valuesData.forEach(view => {
    clear = ` <div>
    <h2>${view.Title}</h2>
    <img src= ${view.Poster}></>
    <h3>Año de Estreno:${view.Year}</h3>
    <h3>Genero: ${view.Type}</h3>
    <button>mas...+</button>
    </div>`;
    document.getElementById("data-omdb").innerHTML += `${clear}`;
  });
};
// encodeURIComponent(str);
//keyup es una interaccion  ddel usuario con el teclado
searchTitle.addEventListener("keydown", e => {
  if (event.key === "Enter") {
    let getTextSearch = e.target.value.trim();
    console.log(getTextSearch);
  }
});
