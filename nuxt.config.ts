// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  modules: [
    "nuxt-security",
    "@nuxtjs/tailwindcss",
    "shadcn-nuxt",
    "@nuxtjs/color-mode",
    "@pinia/nuxt",
    "@formkit/auto-animate/nuxt",
  ],
  shadcn: {
    prefix: '',
    componentDir: './components/ui'
  },
  colorMode: {
    classSuffix: '',
    preference: 'light'
  },
  security: {
    headers: {
      crossOriginEmbedderPolicy: process.env.NODE_ENV === 'development' ? 'unsafe-none' : 'require-corp',
      contentSecurityPolicy: {
        "img-src": [
          "'self'",
          "https://res.cloudinary.com/",
          "https://images.unsplash.com/",
          "https://plus.unsplash.com/",
          "https://images.pexels.com/",
          "https://upload.wikimedia.org/",
        ]
      },
    },
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => tag === 'bdt'
    }
  }
})
