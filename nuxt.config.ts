// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    build: {
        transpile: ["meteor"]
    },
    nitro: {
        preset: 'cloudflare'
    },
})
