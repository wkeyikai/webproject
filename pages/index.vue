<template>
    <div v-swiper:mySwiper="swiperOption" class="swiper-contain">                  
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item, index ) in ['home-1','home-2','home-3']" :key="item" :name="item">
                <div :class="item" :name="item">
                    <transition name="slideleft" v-if="item=='home-1'">
                        <el-aside v-show="swiperRealIndex==index||true" width="500px" >Aside{{index}}</el-aside>
                    </transition>
                    <transition name="slideleft" v-if="item=='home-2'">
                        <el-aside v-show="swiperRealIndex==index" width="500px" class="el-aside-right">Aside{{index}}</el-aside>
                    </transition>
                    <transition name="slideleft" v-if="item=='home-3'">
                        <el-aside v-show="swiperRealIndex==index" width="500px" >Aside{{index}}</el-aside>
                    </transition>
                </div>            
            </div>
        </div>
        <div class="swiper-pagination"></div>
    </div>
    <!--<section class="container">
        <div>
        <app-logo/>
        <h1 class="title">
            DEMO
        </h1>
        <h2 class="subtitle">
            Nuxt.js project
        </h2>
        <nuxt-link to="/about">about</nuxt-link>
        </div>
    </section>-->
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
        let me = this
        return {
            swiperOption: {
                direction:'vertical',
                /*effect : 'fade',
                fade: {
                    crossFade: false,
                },*/
                clickable :true,
                preloadImages:true,
                slidesPerView: 'auto',
                //slidesPerView: 1,
                loop: true,
                centeredSlides: true,
                paginationClickable: true,
                mousewheel: true,
                autoHeight: true, //高度随内容变化
                //initialSlide: 0,
                spaceBetween: 0,
                //height:'100%',
                //speed:1000,
                pagination: {
                    el: '.swiper-pagination',
                    //dynamicBullets: true
                },
                on: {
                    slideChange(data) {
                        //console.log('onSlideChangeEnd', this);
                    },
                    slideChangeTransitionEnd: function(){
                        if(this.swiperRealIndex==0){

                        }
                        me.swiperRealIndex = this.realIndex
                        console.log(this.realIndex);
                    },
                    tap() {
                        //console.log('onTap', this);
                    }
                }
            },
            swiperRealIndex:-1,
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

<style lang="scss">
.swiper-contain{
         margin:0px;
        padding:0px;
        z-index:0;
        /*width:100%;
        height:100%;*/
    %hone-base{
        min-height: 100vh;
        width:100%;
        background-repeat:no-repeat;    
    }
    .home-1{
        @extend  %hone-base;
        background-image: url('~/static/home-bg-1.jpg');
    }
    .home-2{
        @extend  %hone-base;
        background-image: url('~/static/home-bg-2.jpg');
    }
    .home-3{
        @extend  %hone-base;
        background-image: url('~/static/home-bg-3.jpg');
    }
    .swiper-pagination {
        right: 15px;
        bottom: 50%;
        height: 50px;
    }
    .swiper-pagination-bullet{
        width:20px;
        height:20px;
        //background-color: rgba(255,255,255,0);
        border: 2px solid #fff;
        display:block;
        margin:7px 0px 7px 0px;
    }
    .swiper-pagination-bullet-active{
        width:20px;
        height:20px;
        background-color: rgba(0, 0, 0, 0.8);
    }
    .slideleft-enter-active,
    .slideleft-leave-active {
        transition: all .8s;
    }
    
    .slideleft-enter,
    .slideleft-leave-to {
        /* transform: translateY(0); */
        opacity: 0;
    }
}
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
