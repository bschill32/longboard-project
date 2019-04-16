require("dotenv").config()
const express = require("express"),
  massive = require("massive")

const app = express(),
  boardCtrl = require("./controllers/boardCtrl")

const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env

massive(CONNECTION_STRING).then(db => {
  app.set("db", db)
  console.log(`They're coming to kill us!`)
  console.log(db.listTables())
})

app.use(express.json())

//Boards
app.get("/api/boards", boardCtrl.getBoards)

app.listen(SERVER_PORT, () =>
  console.log(`The Red Coats are Coming with ${SERVER_PORT} Men`)
)
