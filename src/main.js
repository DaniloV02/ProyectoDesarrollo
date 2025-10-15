import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'

import InputText from "primevue/inputtext"
import Button from "primevue/button"
import DataTable from "primevue/datatable"
import Column from "primevue/column"
import Card from "primevue/card"

import 'primeicons/primeicons.css'

const app = createApp(App)

app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
})

// 🔹 Registrar componentes globalmente
app.component('PButton', Button)
app.component('PInputText', InputText)
app.component('PDataTable', DataTable)
app.component('PColumn', Column)
app.component('PCard', Card)

app.use(router)
app.mount('#app')

