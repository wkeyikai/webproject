import express from 'express'

// Create express router
const router = express.Router()

// Transform req & res to have the same API as express
// So we can use res.status() & res.json()
var app = express()
router.use((req, res, next) => {

    Object.setPrototypeOf(req, app.request)
    Object.setPrototypeOf(res, app.response)
    req.res = res
    res.req = req
    next()
})
let accessControlAllow = (res)=>{
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
}
//menuList
// Add POST - /api/menuList
router.post('/menuList', (req, res) => {
    accessControlAllow(res)
    console.log('menuList api call start')                 
    res.json({
        list:[  {name:'News',subname:'最新消息',class:'0',path:'news'},
                {name:'About Us',subname:'關於我們',class:'1',path:'about'} ,
                {name:'prodect',subname:'產品資訊',class:'1',path:'prodect'} ,
                {name:'Case Study',subname:'成功案例',class:'1',path:'case'} , 
                {name:'Support',subname:'服務支援',class:'1',path:'support'} ,                               
                {name:'Cooperation',subname:'企業合作',class:'1',path:'cooperation'} , 
                {name:'Contact',subname:'聯絡我們',class:'1',path:'contact'}

    ]})
    console.log('menuList api call end') 
    //return;
    /*if (req.body.username === 'demo' && req.body.password === 'demo') {
        req.session.authUser = { username: 'demo' }
        return res.json({ username: 'demo' })
    }
    res.status(401).json({ message: 'Bad credentials' })   */
})
//AboutData
// Add POST - /api/AboutData
router.post('/aboutData', (req, res) => {
    console.log('AboutData api call start')       
    accessControlAllow(res)
    let base = {name:'base',
                list:[   
                    {name:'Since 2018~now',subname:'',class:'0',path:''},
                    {name:'Member',subname:'',class:'0',path:''},
                    {name:'TEAM',subname:'',class:'0',path:''}
                ]} 
    let item = {name:'item',
                list:[    
                    {name:'Follow car',subname:'',class:'0',path:''},
                    {name:'Follow TPMS',subname:'',class:'0',path:''},
                    {name:'Follow 多屏',subname:'',class:'0',path:''},
                    {name:'Follow 360pvm',subname:'',class:'0',path:''},
                    {name:'Follow navi',subname:'',class:'0',path:''},
                    {name:'Follow dvr',subname:'',class:'0',path:''},
                    {name:'Follow cam',subname:'',class:'0',path:''},
                    {name:'Follow home',subname:'',class:'0',path:''}
                ]}
    let mode = {name:'mode',
                list:[  
                    {name:'Follow pc/kvm',subname:'',class:'0',path:''},
                    {name:'Since 2018~',subname:'',class:'0',path:''},
                    {name:'Follow design',subname:'',class:'0',path:''},
                    {name:'Follow Sales',subname:'',class:'0',path:''},
                    {name:'Follow 合作',subname:'',class:'0',path:''}
                ]}          
     res.json({base,item,mode})
     console.log('AboutData api call end') 
     //return;
     /*if (req.body.username === 'demo' && req.body.password === 'demo') {
         req.session.authUser = { username: 'demo' }
         return res.json({ username: 'demo' })
     }
     res.status(401).json({ message: 'Bad credentials' })   */
})
 //prodect
// Add POST - /api/prodect
router.post('/prodectData', (req, res) => {
    accessControlAllow(res)
    console.log('prodectData api call start') 
    res.json({
        list:[  {name:'Chip ip',subname:'最新消息',class:'0',path:''},
                {name:'Module ip',subname:'關於我們',class:'1',path:''} ,
                {name:'Embade system',subname:'產品資訊',class:'1',path:''} ,
                {name:'Prodect',subname:'成功案例',class:'1',path:''} , 
                {name:'Part time design',subname:'Web/android/ios/window/mcu/hw /機構/pcb/',class:'1',path:''} ,                               
                {name:'客製化產品開發',subname:'DesignHouse',class:'1',path:''} , 
                {name:'經銷代理',subname:'聯絡我們',class:'1',path:''},
                {name:'系統規劃/產品顧問諮詢',subname:'聯絡我們',class:'1',path:''}

    ]})
    console.log('prodectData api call end') 
})
// Export the server middleware
export default {
    path: '/api',
    handler: router
}
