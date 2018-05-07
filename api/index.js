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

//menuList
// Add POST - /api/menuList
router.post('/menuList', (req, res) => {
   console.log('menuList api call start')                 
   res.json({
      list:[{name:'Follow car',class:'0'},
            {name:'Follow TPMS',class:'1'}
   ]})
   console.log('menuList api call end') 
   return;
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
