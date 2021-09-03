import { templateRegister } from './view/template-register.js'
import { templateHome } from './view/template-home.js'
import { templateLogin } from './view/template-login.js'
import { templateWall } from './view/template-wall.js'

// al recargar la pagina cambia el hash
location.hash = '#/'
const initialContainer = document.getElementById('initial-container')
const sectionContainer = document.getElementById('s-container')
sectionContainer.appendChild(templateHome())

export const router = (hash) => {
  const main = document.getElementById('p-container')
  sectionContainer.innerHTML = ''
  switch (hash) {
    case '#/':
      return sectionContainer.appendChild(templateHome())

    case '#/Login':
      return sectionContainer.appendChild(templateLogin())

    case '#/Register':
      return sectionContainer.appendChild(templateRegister())

    case '#/Wall':
      document.getElementById('p-container').removeChild(initialContainer)
      document.getElementById('p-container').appendChild(templateWall())
      break

    default:
      return console.log('error 404')
  }
}
