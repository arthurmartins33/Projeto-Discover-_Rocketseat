function toggleMode() {
const html = document.documentElement // Acessando o html através do documentElement.
html.classList.toggle("light")

const img = document.querySelector("#profile img")

if (html.classList.contains("light")) { 
 
  img.setAttribute("src", "./assets/avatar-light.png")
  img.setAttribute("alt", "Imagem de Perfil Light")
} else {
   img.setAttribute("src", "./assets/avatar.png")
   img.setAttribute("alt", "Imagem de Perfil Dark")
}

}