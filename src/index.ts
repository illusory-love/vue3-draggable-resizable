import VueDraggableResizable from './components/Vue3DraggableResizable'
import DraggableContainer from './components/DraggableContainer'
import type { App, Plugin } from 'vue'

VueDraggableResizable.install = (app: App) => {
  // @ts-ignore
  app.component(VueDraggableResizable.name, VueDraggableResizable)
  // @ts-ignore
  app.component(DraggableContainer.name, DraggableContainer)
  return app
}

export { default as DraggableContainer } from './components/DraggableContainer'
export default VueDraggableResizable as typeof VueDraggableResizable & Plugin