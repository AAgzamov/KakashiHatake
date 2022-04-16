const headers = document.querySelectorAll("div.head")
const markers = document.querySelectorAll("span.marker")
const dropdowns = document.querySelectorAll("div.dropdown")
const mainButtonDiv = document.querySelector("div.mainButton")
const a = document.querySelector("a")
const sharinganSoundEffect = new Audio("../audio/sharingan.mp3")
const sharinganImg = document.querySelector("#sharingan")
// const genjutsuDiv = document.querySelector(".genjutsu")

headers.forEach((item, i) => {
  item.addEventListener("click", () => {
    if (markers[i].innerText === "-"){
      markers[i].innerText = "+"
      // dropdowns[i].style.display = "none"
      dropdowns[i].style.animationName = "dropdownDisappear"
    }
    else {
    markers[i].innerText = "-"
    dropdowns[i].style.display = "flex"
    dropdowns[i].style.animationName = "dropdownAppear"
  }
  })
});

mainButtonDiv.addEventListener("mousenter", () => {
  a.href = ""
})
mainButtonDiv.addEventListener("click", () => {
  a.href = "../index.html"
})

sharinganImg.addEventListener("click", () => {
  sharinganSoundEffect.play()
  // genjutsuDiv.style.display = "block"
})
