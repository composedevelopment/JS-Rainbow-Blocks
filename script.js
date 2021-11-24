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
      element.classList.add('MyClass' + x + y)
          grid.append(element)
    }
}

document.addEventListener("mousemove", e => {
    //console.log(Math.floor(e.pageX / 5))
})

function mouseCheck() {
  console.log(e.pageX)
}