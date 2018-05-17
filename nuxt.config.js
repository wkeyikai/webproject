import bodyParser from 'body-parser'
import session from 'express-session'

export default {
    head: {
        title: 'followtek',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', content: 'Auth Routes example' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },
    /*
    ** Build configuration
    */
    build: {
        vendor: [
            'axios',
            'element-ui'
        ],
        /*babel: {
        'plugins': [['component', [
            {
            'libraryName': 'element-ui',
            'styleLibraryName': 'theme-chalk'
            },
            'transform-async-to-generator',
            'transform-runtime'
        ]]],
        comments: true
        }, */ 
        /*
        ** Run ESLint on save
        */
        /*extend (config, { isDev, isClient }) {
            if (isDev && isClient) {
                config.module.rules.push({
                enforce: 'pre',
                test: /\.(js|vue)$/,
                loader: 'eslint-loader',
                exclude: /(node_modules)/
                })
            }
        }*/
    },
    render: {
        bundleRenderer: {
        shouldPreload: (file, type) => {
            return ['script', 'style', 'font'].includes(type)
        }
        }
    },
    /*
    ** Customize the progress bar color
    */
    //loading: { color: '#3B8070' },
    loading: '~/components/loading.vue',
    css:[
        '~/css/main.css',
        'element-ui/lib/theme-chalk/index.css' ,
        'swiper/dist/css/swiper.css'
    ],
    plugins: [
        '~/plugins/i18n.js',
        {src: '~plugins/element-ui', ssr: true} ,
        {src:'~/plugins/vue-awesome-swiper.js', ssr: false}
    ],
    /*
    ** Add server middleware
    ** Nuxt.js uses `connect` module as server
    ** So most of express middleware works with nuxt.js server middleware
    */
    serverMiddleware: [
        // body-parser middleware
        /*bodyParser.json(),
        // session middleware
        session({
        secret: 'super-secret-key',
        resave: false,
        saveUninitialized: false,
        cookie: { maxAge: 60000 }
        }),      */
        // Api middleware
        // We add /api/login & /api/logout routes
        '~/api'
    ]
}
