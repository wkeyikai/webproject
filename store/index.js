import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state = {
  locales: ['en', 'fr'],
  locale: 'en',
  menuList: []
}
let apiServer='http://127.0.0.1:3000'//tmp
let actions = {
  async MENU_LIST({ commit, dispatch, state }){//, { type='' }) {
    //commit('MENU_LIST_DATA', { type })
    try {                                          
    const response = await axios.post(apiServer+'/api/menuList')
    //console.log('menu.json',ax.get('/menu.json'))
    commit('menu_list',response.data.list)
    console.log('store:menu list')
    }catch(error){
       if (error.response && error.response.status === 401) {
        throw new Error('Bad credentials')
      }
      throw error
    }
    //return response.data.list
     /*fetch('data/menu.json')
      .then(r => r.json())
      .then(json => {
        commit('MENU_LIST',ax.get('menu.json'))
      })  */
  }
}
let mutations = {
  SET_LANG(state, locale) {
    if (state.locales.indexOf(locale) !== -1) {
      state.locale = locale
    }
  },
  menu_list(state, payload){
          state.menuList =  payload
  }
  /*MENU_LIST(){
     state.menu_list = state.menu_list
  }   */
}                     
let getters ={
  menuList: state => state.menuList
}
let list ={
    state,
    actions,
    mutations,
    getters
}
export default function(){
//export function createStore () {
  return new Vuex.Store({ 
    // root
    /*getters,
    // 將整理好的 modules 放到 vuex 中組合
    modules: {
      list
    }, /
    // 嚴格模式，禁止直接修改 state
    strict: true    */
    state,
    actions,
    mutations,
    getters
  })
}