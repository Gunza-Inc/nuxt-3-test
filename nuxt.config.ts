import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
    buildModules: [
        'nuxt-windicss',

    ],
    css: [
        'virtual:windi.css'
    ],
    build: {
        transpile: [
            'majestic-ui'
        ]
    }
    // plugins: [{src: "~/plugins/main.js", ssr: false}]
})
