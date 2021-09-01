import { templateRegister } from './view/template-register.js'
import { templateHome } from './view/template-home.js'
import { templateLogin } from './view/template-loguin.js'

// al recargar la pagina cambia el hash
location.hash = '#/'

const sectionContainer = document.getElementById('s-container')
sectionContainer.appendChild(templateHome())

export const router = (hash) => {
  sectionContainer.innerHTML = ''
  switch (hash) {
    case '#/':
      sectionContainer.appendChild(templateHome())
      break

    case '#/Loguin':
      return sectionContainer.appendChild(templateLogin())

    case '#/Register':
      return sectionContainer.appendChild(templateRegister())

    default:
      return console.log('error 404')
  }
}
