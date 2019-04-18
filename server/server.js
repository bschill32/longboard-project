require("dotenv").config()
const express = require("express"),
  massive = require("massive"),
  session = require("express-session")

const app = express(),
  BoardCtrl = require("./controllers/boardCtrl"),
  AuthCtrl = require("./controllers/authCtrl")

const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env

massive(CONNECTION_STRING).then(db => {
  app.set("db", db)
  console.log(`They're coming to kill us!`)
  console.log(db.listTables())
})

app.use(express.json())
app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false
  })
)

//Boards
app.get("/api/boards", BoardCtrl.getBoards)

//Cart
app.get("./api/cart", BoardCtrl.getCart)
app.post("/api/cart/:id", BoardCtrl.addToCart)
app.put("/api/cart/:id", BoardCtrl.updateQuantity)

//Auth
app.post("/auth/register", AuthCtrl.register)
app.post("/auth/login", AuthCtrl.login)
app.get("/auth/user-data", AuthCtrl.userData)
app.get("/auth/logout", AuthCtrl.logout)

app.listen(SERVER_PORT, () =>
  console.log(`The Red Coats are Coming with ${SERVER_PORT} Men`)
)
