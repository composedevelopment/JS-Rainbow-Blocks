const grid = document.querySelector(".grid")
grid.style.setProperty("--size", 10)
let time = 0
setInterval(function() { 
  grid.style.setProperty("--tilecolor", time)
  time += 1
}, 50);

const board = []
for (let x = 0; x < 10; x++) {
    const row = []
    for (let y = 0; y < 10; y++) {
      const element = document.createElement("div")
      element.addEventListener("mouseover", function() {
          element.classList.add("spin")
      })
          grid.append(element)
    }
}

grid.addEventListener("mouseover", function() {
  document.querySelector(".below").style.animation = "popup 1s forwards"
}, {once: true})

document.addEventListener("click", e => {
  let spins = document.querySelectorAll(".spin")
  Array.from(spins).forEach(function (el) {el.classList.remove("spin")})
})