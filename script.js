let icone = document.querySelector(".icone")
let sidebar = document.querySelector(".sidebar")

icone.addEventListener("click", (e) => {
    icone.classList.toggle("iconeHover")
    sidebar.classList.toggle("sidebarHover")
})