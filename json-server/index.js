const fs = require('fs')
const jsonServer = require('json-server')
const jwt = require('jsonwebtoken')
const path = require('path')

const server = jsonServer.create()
const router = jsonServer.router(path.resolve(__dirname, 'db.json'))
const middlewares = jsonServer.defaults()
server.use(jsonServer.defaults({}))
server.use(jsonServer.bodyParser)

server.use(async (req, res, next) => {
  await new Promise((res) => {
    setTimeout(res, 1000)
  })
  next()
})

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares)

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser)
server.use((req, res, next) => {
  if (req.method === 'POST') {
    req.body.createdAt = Date.now()
  }
  // Continue to JSON Server router
  next()
})

server.post('/login', (req, res) => {
  const { username, password } = req.body
  const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'))
  const { users } = db

  const userFromDb = users.find((user) => user.username === username && user.password === password)

  if (userFromDb) {
    return res.json(userFromDb)
  }

  return res.status(403).json({ message: 'AUTH_ERROR' })
})

server.get('/profile', (req, res) => {
  const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'))
  const { profile } = db
  return res.json(profile)
})

server.put('/profile', (req, res) => {
  const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'))
  const { profile } = db
  return res.json(profile)
})

server.put('/articles/:id', (req, res) => {
  const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'))
  const { profile } = db
  return res.json(profile)
})

server.use((req, res, next) => {
  if (!req.headers.authorization) return res.status(403).json({ message: 'AUTH_ERROR' })
  next()
})

// Use default router
server.use(router)
server.listen(8000, () => {
  console.log('JSON Server is running')
})
