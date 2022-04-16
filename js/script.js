const waifuTab = document.querySelector(".waifu")
const header = document.querySelector("header")
const pictureContainer = document.querySelector(".picture-container")
const biographyTab = document.querySelector(".biography a")
const galleryTab = document.querySelector(".gallery a")
// const playMusicButton = document.querySelector(".audioController img")
// const music = new Audio("./audio/Yasuharu Takanashi - Man of the World (OST Naruto Shippuuden).mp3")



biographyTab.addEventListener("click", () => {
  biographyTab.href = "./html/biography.html"
})

galleryTab.addEventListener("click", () => {
  galleryTab.href = "./html/gallery.html"
})

// playMusicButton.addEventListener("click", () => {
//   if (music.paused === true){
//     playMusicButton.src = "./pictures/pauseIcon.png"
//     music.play()
//   }
//   else{
//     playMusicButton.src = "./pictures/playIcon.png"
//     music.pause()
//   }
// })
