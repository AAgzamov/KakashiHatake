const galleryContainer = document.querySelector("div.container")
const mainButton = document.querySelector("div.mainButton")
const img = document.querySelectorAll("img")
const imageViewerDiv = document.createElement("div")
const imgPopup = document.createElement("img")
imgPopup.className = "imgPopup"
const quitDiv = document.querySelector("div.quit")

const body = document.querySelector("body")
const mainButtonDiv = document.createElement("div")
mainButtonDiv.className = "mainButton"
const a = document.createElement("a")

const mainButtonText = document.createTextNode("Back to Main Page")


galleryContainer.addEventListener("animationend", () => {
  galleryContainer.style.position = "static"
  body.appendChild(a)
  a.appendChild(mainButtonDiv)
  mainButtonDiv.appendChild(mainButtonText)
})


img.forEach((item, i) => {
  item.addEventListener("click", () => {
    imageViewerDiv.className = "imageViewer"
    body.appendChild(imageViewerDiv)
    imgPopup.src = item.src
    imageViewerDiv.appendChild(imgPopup)
    imageViewerDiv.style.display = "block"
    imageViewerDiv.style.top = "0%"
    quitDiv.style.display = "block"
  })
});

mainButtonDiv.addEventListener("mousenter", () => {
  a.href = ""
})
mainButtonDiv.addEventListener("click", () => {
  a.href = "../index.html"
})

// ArrowRight
// ArrowLeft

document.addEventListener("keydown", (key) => {
  if (key.key === "q") {
    imageViewerDiv.style.display = "none"
    quitDiv.style.display = "none"
  }
})
