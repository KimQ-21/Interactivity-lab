console.log("hello world");

let message = document.querySelector ('#message')

function addMovie(event) {
  event.preventDefault()
    const inputField = document.querySelector("input");

  let movie = document.createElement("li");
  let movieTitle = document.createElement("span");
  movieTitle.addEventListener('click', crossOffMovie)
  movieTitle.textContent = inputField.value;
  movie.appendChild(movieTitle);
  document.querySelector("ul").appendChild(movie);

  let deleteBtn = document.createElement("button");
  deleteBtn.addEventListener('click', deleteMovie)
  deleteBtn.textContent = 'X';
  movie.appendChild(deleteBtn)

  inputField.value = ''

}

document.querySelector("form").addEventListener("submit", addMovie);

function deleteMovie(event) {
    console.log(event)
    event.target.parentNode.remove()
    message.textContent = 'Movie deleted!'
    
}

function crossOffMovie (event) {
    event.target.classList.toggle('checked')
    if (event.target.classList.contains('checked')){
        message.textContent = 'Movie Watched'
    }
    else {
        message.textContent = 'Movie added back!'
    }
}