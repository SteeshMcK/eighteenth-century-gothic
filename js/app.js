const container = document.querySelector(".container")
const authors = [
  { name: "Horace Walpole", image: "images/horace-walpole.jpg", work: "The Castle of Otranto (1764)" },
  { name: "Clara Reeve", image: "images/clara-reeve.jpg" },
  { name: "Sophia Lee", image: "images/sophia-lee.jpg" },
  { name: "William Beckford", image: "images/william-beckford.jpg" },
  { name: "Charlotte Turner Smith", image: "images/charlotte-turner-smith.jpg" },
  { name: "Ann Radcliffe", image: "images/ann-radcliffe.jpg" }
]

const showAuthors = () => {
    let output = ""
    authors.forEach(
      ({ name, image, work }) =>
        (output += `
                <div class="card">
                  <img class="card--avatar" src=${image} />
                  <h1 class="card--title">${name}</h1>
                  <p>Most notable work: </p>
                  <p class="card--data">${work}</p>
                  <a class="card--link" href="#">Explore</a>
                </div>
                `)
    )
    container.innerHTML = output
  }
  
  document.addEventListener("DOMContentLoaded", showAuthors)