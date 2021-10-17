import MajesticUI from 'majestic-ui'

import { defineNuxtPlugin } from '#app'

import '../node_modules/majestic-ui/dist/style.css'

export default defineNuxtPlugin(nuxtApp => {
	nuxtApp.app.use(MajesticUI)
})

