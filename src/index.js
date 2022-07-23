import App from 'vue'
import * as components from './components'

function install () {
  for (const key in components) {
    App.component(key, components[key])
  }
}

export default { install }
export * from './components'