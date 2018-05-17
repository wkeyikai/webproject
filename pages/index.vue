<template>
    <div >
        <div v-if="homeList.length" v-swiper:mySwiper="swiperOption" class="swiper-contain"  @someSwiperEvent="callback">                  
            <div class="swiper-wrapper my-wrapper" >
                <div class="swiper-slide" v-for="(item, index ) in homeList" :key="item.name" :name="item">
                    <!--v-bind:style="{ 'background-image': `url(${item.path}.jpg)` }
                    style="{ backgroundImage: 'url(' + require(@/assets/img/${page.image}) + ')' }"-->
                    <!--< :style="{ 'background-image': `url(home-bg-${item}.jpg)` }">-->
                    <div class="home-base" 
                        :style="{
                                backgroundImage: `url('${item.path}')`, 
                                backgroundPosition:index%2==0?`center 100px`:`center bottom 100px`}">
                        <!--<img class="home-base" :src="require(`~/assets/home-bg-${item}.jpg`)"/>-->
                        <transition name="slideleft" v-if="index==0||index==-1">
                            <el-aside v-show="swiperRealIndex==index||index==-1" width="100%" height="500px" style="position:absolute;top:500px;">{{swiperRealIndex}}</el-aside>
                        </transition>
                        <transition name="slideleft" v-if="index==1">
                            <el-aside v-show="swiperRealIndex==index" width="100%" height="100px" style="position:absolute;top:100px;" >Aside{{index}}</el-aside>
                        </transition>
                        <transition name="slideleft" v-if="index==2">
                            <el-aside v-show="swiperRealIndex==index" width="100%" height="500px" style="position:absolute;top:500px;" >Aside{{index}}</el-aside>
                        </transition>
                    </div>            
                </div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
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
            loading:false,
            swiperOption: {
                swiperRealIndex:-1,
                direction:'vertical',
                /*effect : 'fade',
                fade: {
                    crossFade: false,
                },*/
                clickable :true,
                //preloadImages:true,
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
                        //console.log('obj',this.realIndex)
                        //console.log('onSlideChangeEnd', this);
                    },
                    slideChangeTransitionEnd: function(obj){
                        //console.log('obj',obj)
                        if(this.swiperRealIndex==0){

                        }
                        me.swiperRealIndex = this.realIndex
                        //console.log('>>',me.swiperRealIndex);
                    },
                    tap() {
                        //console.log('onTap', this);
                    }
                }
            },
            homeList:[],
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
        this.init()
    },
    async mounted(){
        setTimeout(() => {
            this.homeList = this.homeData.list 
        }, 100)
    },
    methods:{
        ...mapActions([
            'HOME_DATA'
        ]), 
        async init(){
            await this['HOME_DATA']()
        },
        callback(data){
            console.log('callback',data)
        }
    },
    computed:{
        ...mapGetters([
            'homeData'
        ]),
        test() {
            console.log(this.swiperRealIndex)
            return this.swiperRealIndex
        }
    }
}
</script>

<style lang="scss">
.swiper-contain{
    background: -webkit-linear-gradient(#1E90FF,#BBFFEE);
    background: -o-linear-gradient(#1E90FF,#BBFFEE);
    background: -moz-linear-gradient(#1E90FF,#BBFFEE);
    background: linear-gradient(#1E90FF,#BBFFEE);
    margin:0px;
    padding:0px;
    z-index:0;
    /*width:100%;
    height:100%;*/
    %home-base{
        min-height: 100vh;
        height:100vh;
        width:100%;
        min-height: 100vh;
        background-repeat:no-repeat;    
    }
    .home-base{
        background-size: 1024px ;
        //width: 1024px;
        //height: 300px;
        //background-position: center center;
        @extend  %home-base;
    }
    .home-1{
        @extend  %home-base;
        background-image: url('~/static/home-bg-1.jpg');
    }
    .home-2{
        @extend  %home-base;
        background-image: url('~/static/home-bg-2.jpg');
    }
    .home-3{
        @extend  %home-base;
        background-image: url('~/static/home-bg-3.jpg');
    }
    .swiper-wrapper{
        height: 100vh;
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
