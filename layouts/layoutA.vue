<template>
    <div id="layoutA" class="body">   
      <el-container>
        <el-header>
            <el-row :gutter="10">
                <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8"><span> </span></el-col>
                <el-col :xs="16" :sm="16" :md="16" :lg="16" :xl="16"><navBar :data="menuList"></navBar></el-col>  
                <!-- <div class="grid-content bg-purple"></div>-->
            </el-row>
        </el-header>
        <el-main>
            <div v-swiper:mySwiper="swiperOption" class="swiper-contain">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="item in ['home-1','home-2','home-3']" :key="item">
                        <div :class="item"><nuxt/></div>            
                    </div>
                </div>
            </div>
            <div class="swiper-pagination"></div>
          <!--<el-aside width="200px">Aside</el-aside>
          <el-main><nuxt/></el-main>  -->
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </div>     
</template>
<script>
//import Vue from 'vue'
import {mapActions,mapGetters} from 'vuex'
//import { swiper, swiperSlide } from 'vue-awesome-swiper'
import navBar from '~/components/navBar.vue'
let layout = 'dark'  
export default {
    components: {
      navBar
    },
    layout(content){     
      return layout
    },
    scrollToTop: true,
    data(){
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
                slideChange() {
                    console.log('onSlideChangeEnd', this);
                },
                tap() {
                    console.log('onTap', this);
                }
            }
        },
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
    methods:{
      ...mapActions([
        'MENU_LIST'
      ]),  
      init(){
        this['MENU_LIST']()
      }
    },
    computed:{
      ...mapGetters([
        'menuList'
      ])  
    }
}
</script>
<style lang="scss"> 
#layoutA{
    %hone-base{
        width:100%;
        height:100%;
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
    .el-header {
        z-index:100;
        //background-color: #B3C0D1;
        background-color: rgba(0,0,0,.6);
        color: #333;
        text-align: center;
        line-height: 60px;
        width:100%;
        position:fixed;
        top:0px;
        left:0px;
    }
    .el-footer {
        background-color: rgba(0,0,0,.6);
        color: #333;
        text-align: center;
        line-height: 60px;
        width:100%;
        position:absolute;
        bottom:0px;
        left:0px;
    }   
    .el-aside {
        //background-color: #D3DCE6;
        background-color: rgba(255,255,255,.8);
        color: #333;
        text-align: center;
        line-height: 200px;
    }
    
    .el-main {
        //background-color: #E9EEF3;
        background-color: rgba(255,255,255,.1);
        color: #333;
        margin: 0px;
        padding: 0px;
        text-align: center;
        line-height: 160px;
    }
    
    .fd_slide{
        /*width:100%;
        height:100%; */
    }
    .swiper-contain{
        margin:0px;
        padding:0px;
        z-index:0;
        /*width:100%;
        height:100%;*/
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
}

.body {
  //background-image: url('~/static/home-bg-1.jpg');
  //background-repeat:no-repeat;
}

body > .el-container {
    margin-bottom: 40px;
}
body {
    overflow: hidden;
}
.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
    line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
    line-height: 320px;
}

//rwd 
.el-col {
    border-radius: 4px;
}
.bg-purple-dark {
    background: #99a9bf;
}
.bg-purple {
    background: #d3dce6;
}
.bg-purple-light {
    background: #e5e9f2;
}
.grid-content {
    border-radius: 4px;
    min-height: 36px;
}
//rwd scss prototype
$break:640px;
$grid-width:  7.33333333333333%;//12grid
$gutter-width: 1%;

/*.clearfix{zoom:1;}
.clearfix:after{content:'.';display:block;clear:both;visibility:hidden;height:0;font-size:0;}

@function grid-width($n) {
     @return $n * $grid-width + ($n - 1) * $gutter-width;
}

@media screen and (min-width: $break+1){
    .container {
        width:960px;
        margin:0 auto;
    }
}
@media screen and (min-width: 0) and (max-width: $break){
    .container {
        width:100%;
        margin:0 auto;
    }
}  */


/*ul li{
    width:grid-width(3);
    float:left; 
    box-size:border;
    border:1px solid #000;
}*/
</style>