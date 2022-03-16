import { App } from 'vue'
import { ElButton, ElTabs, ElForm, ElFormItem, ElInput,ElCheckbox,EL } from 'element-plus'

const components = [ElButton, ElTabs, ElForm, ElFormItem, ElInput]

export default function (app: App): void {
  for (const component of components) {
    app.component(component.name, component)
  }
}
