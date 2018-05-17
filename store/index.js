import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state = {
    locales: ['en', 'fr'],
    locale: 'en',
    menuList: [],
    aboutData: {},
    prodectData:{},
    homeData:{}
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
    },
    async ABOUT_DATA({ commit, dispatch, state }){
        const response = await axios.post(apiServer+'/api/aboutData')
        //console.log('response',response)
        commit('about_data',response.data)
    },
    async PRODECT_DATA({ commit, dispatch, state }){
        const response = await axios.post(apiServer+'/api/prodectData')
        console.log('response',response)
        commit('prodect_data',response.data)
    },
    async HOME_DATA({ commit, dispatch, state }){
        const response = await axios.post(apiServer+'/api/homeData')
        //console.log('response',response)
        commit('home_data',response.data)
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
    },
    about_data(state, payload){
        state.aboutData = payload
    },
    prodect_data(state, payload){
        state.prodectData = payload
    },
    home_data(state, payload){
        state.homeData = payload
    }
}                     
let getters ={
    menuList: state => state.menuList,
    aboutData: state => state.aboutData,
    prodectData: state => state.prodectData,
    homeData: state => state.homeData
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
        modules: {
        list
        }, /
        strict: true    */
        state,
        actions,
        mutations,
        getters
    })
}