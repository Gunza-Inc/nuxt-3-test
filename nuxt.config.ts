import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
    buildModules: [
        'nuxt-windicss',

    ],
    css: [
        'virtual:windi.css'
    ],
    // plugins: [{src: "~/plugins/main.js", ssr: false}]
})
