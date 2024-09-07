const menu = document.querySelector('.menu')
const icon = document.querySelector('.icon')

icon.onclick = () => {
    menu.classList.toggle('open')
}