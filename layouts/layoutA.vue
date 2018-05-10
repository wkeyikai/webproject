<template>
  <div class="dark">   
    <el-container>
      <el-header>
        <navBar :data="menuList"></navBar>
      </el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-main>Main<nuxt/></el-main>
      </el-container>
      <el-footer>Footer</el-footer>
    </el-container>
    
  </div>     
</template>
<script>
import {mapActions,mapGetters} from 'vuex'
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
<style>
body {
  overflow: hidden;
}

.el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
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