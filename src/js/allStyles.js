import '../stylesheets/style.css'

document.addEventListener('DOMContentLoaded', () => {
  const burgerButton = document.querySelector('.MobileBurger img:nth-child(2)')
  const menu = document.querySelector('.MainMenuNav')

  if (burgerButton && menu) {
    burgerButton.onclick = () => {
      menu.classList.toggle('active')
    }
  }
})
