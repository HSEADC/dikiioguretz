import '../stylesheets/style.css'

var form = document.getElementById('my-form')

async function handleSubmit(event) {
  event.preventDefault()
  var status = document.getElementById('my-form-status')
  var data = new FormData(event.target)
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: 'application/json'
    }
  })
    .then((response) => {
      if (response.ok) {
        status.innerHTML = 'спасибо, оставайтесь с нами=)'
        form.reset()
      } else {
        response.json().then((data) => {
          if (Object.hasOwn(data, 'errors')) {
            status.innerHTML = data['errors']
              .map((error) => error['message'])
              .join(', ')
          } else {
            status.innerHTML = 'Упс.. Что-то пошло не так. Попробуйте еще раз=)'
          }
        })
      }
    })
    .catch((error) => {
      status.innerHTML = 'Упс.. Что-то пошло не так. Попробуйте еще раз=)'
    })
}
form.addEventListener('submit', handleSubmit)

document.addEventListener('DOMContentLoaded', () => {
  const burgerButton = document.querySelector('.MobileBurger img:nth-child(2)')
  const menu = document.querySelector('.MainMenuNav')

  if (burgerButton && menu) {
    burgerButton.onclick = () => {
      menu.classList.toggle('active')
    }
  }
})
