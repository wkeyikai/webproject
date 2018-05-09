<template>
  <div class="dark">   
    <header>
      <navBar :data="menuList"></navBar>
    </header>
    <!--<footer>
      <slot name="fotter"></slot>
    </footer> -->
    <nuxt/>  
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
header{
  background-color:#00BFFF;//deepskyblue
  width:100%; 
  height:60px;
}
.dark {
  position: absolute;
  z-index:0;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100%;
  background: black;
  color: white;
  padding: 10px;
}
.dark a {
  color: white;
}
</style>