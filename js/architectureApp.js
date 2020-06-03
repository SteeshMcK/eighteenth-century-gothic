const container = document.querySelector(".container--architecture")
const architecture = [
  { name: "Horace Walpole", image: "images/walpoleHorace.JPG", work: "The Castle of Otranto (1764)", link: "https://www.britannica.com/biography/Horace-Walpole" },
  { name: "Clara Reeve", image: "images/reeveClara.JPG", work: "The Old English Baron (1777)", link: "https://en.wikipedia.org/wiki/Clara_Reeve" },
  { name: "Sophia Lee", image: "images/sophia-lee.jpg" },
  { name: "William Beckford", image: "images/william-beckford.jpg" },
  { name: "Charlotte Turner Smith", image: "images/charlotte-turner-smith.jpg" },
  { name: "Ann Radcliffe", image: "images/ann-radcliffe.jpg" }
]

const showArchitecture = () => {
    let output = ""
    architecture.forEach(
      ({ name, image, work, link }) =>
        (output += `
                <div class="card">
                  <img class="card--avatar" src=${image} />
                  <h1 class="card--title">${name}</h1>
                  <p>Most notable work: </p>
                  <p class="card--data">${work}</p>
                  <a class="card--link" href=${link} target="blank">Explore</a>
                </div>
                `)
    )
    container.innerHTML = output
  }
  
  document.addEventListener("DOMContentLoaded", showArchitecture)

  // Check if serviceWorker is supported by current browser
  if ("serviceWorker" in navigator) {
    // "Listen" to page "load" event...
    window.addEventListener("load", function() {
      // to register service worker by passing name of file to navigator.serviceWorker.register()
      navigator.serviceWorker
        .register("/projects2020/PWA/eighteenth-century-gothic/serviceWorker.js")
        .then(res => console.log("service worker registered"))
        .catch(err => console.log("service worker not registered", err))
    })
  }