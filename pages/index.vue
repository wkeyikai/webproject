<template>
    <section class="container">
        <div>
        <!--<app-logo/>-->
        <h1 class="title">
            DEMO
        </h1>
        <h2 class="subtitle">
            Nuxt.js project
        </h2>
        <nuxt-link to="/about">about</nuxt-link>
        </div>
    </section>   
</template>

<script>
import {mapActions,mapGetters} from 'vuex'
import AppLogo from '~/components/AppLogo.vue'
let layout = 'layoutA'
export default {
    components: {
        AppLogo
    },
    layout(content){
        return layout
    },
    scrollToTop: true,
    data(){
        return {
            title:this.$t('home.title')+'followTeK',
            className : {'0':'button--green','1':'button--grey'}
        }
    },
    head () {
        return {
        title: this.title,
        meta: [
                { hid: 'description', name: 'description', content: 'My custom description' }
            ]
        }
    },
    created() {
        //this.init()
    },
    methods:{
        /*...mapActions([
        'MENU_LIST'
        ]), 
        init(){
        this['MENU_LIST']()
        }
    },   *
    computed:{
        /*...mapGetters([
        'menuList'
        ]) */
    }
}
</script>

<style>
.container {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.title {
    font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
}

.subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
