const bcrypt = require("bcryptjs")

module.exports = {
  register: async (req, res) => {
    const db = req.app.get("db")
    const { name, email, password } = req.body

    let users = await db.getUserByEmail(email)
    let user = users[0]

    if (user) {
      return res.status(409).send({ message: "Email already in use." })
    }

    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(password, salt)

    let createUserResponse = await db.createUser([name, email, hash])
    let createdUser = createUserResponse[0]

    req.session.user = createdUser
    res.send(
      req.session.user
      // {
      //     message: 'logged in',
      //     userData: req.session.user,
      //     loggedIn: true
      //   }
    )
  },

  login: async (req, res) => {
    let db = req.app.get("db")
    let { email, password } = req.body

    let userResponse = await db.getUserByEmail(email)
    let user = userResponse[0]

    if (!user) {
      return res.status(401).send({ message: "Account not found." })
    }

    const isAuthenticated = bcrypt.compareSync(password, user.password)

    if (!isAuthenticated) {
      return res.status(403).send({ message: "Incorrect password." })
    }

    delete user.password

    req.session.user = user
    res.send(
      req.session.user
      // {
      //     message: 'Log in successful',
      //     loggedIn: true
      //   }
    )
  },

  userData(req, res) {
    if (req.session.user) res.status(200).send(req.session.user)
    else res.status(401).send("Please log in")
  },

  logout: (req, res) => {
    req.session.destroy()
    res.sendStatus(200)
    //res.redirect('http://localhost:3000/#/')
  }
}
