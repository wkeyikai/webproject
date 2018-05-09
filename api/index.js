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
      list:[{name:'News',submane:'最新消息',class:'0',path:'a'},
            {name:'About Us',submane:'最新消息',class:'1',path:'b'} ,
            {name:'prodect',submane:'產品資訊',class:'1',path:'b'} ,
            {name:'Case Study',submane:'成功案例',class:'1',path:'b'} , 
            {name:'Support',submane:'服務支援',class:'1',path:'b'} ,                               
            {name:'Cooperation',submane:'企業合作',class:'1',path:'b'} , 
            {name:'Contact',submane:'聯絡我們',class:'1',path:'b'}

   ]})
   console.log('menuList api call end') 
   //return;
  /*if (req.body.username === 'demo' && req.body.password === 'demo') {
    req.session.authUser = { username: 'demo' }
    return res.json({ username: 'demo' })
  }
  res.status(401).json({ message: 'Bad credentials' })   */
})

// Export the server middleware
export default {
  path: '/api',
  handler: router
}
