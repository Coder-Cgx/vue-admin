import { App } from 'vue'
import {
  ElButton,
  ElTabs,
  ElForm,
  ElFormItem,
  ElInput,
  ElCheckbox,
  ElLink
} from 'element-plus'

const components = [
  ElButton,
  ElTabs,
  ElForm,
  ElFormItem,
  ElInput,
  ElCheckbox,
  ELLink
]

export default function (app: App): void {
  for (const component of components) {
    app.component(component.name, component)
  }
}
