module.exports = {
  getBoards: (req, res) => {
    let db = req.app.get("db")
    db.get_boards()
      .then(response => {
        res.status(200).send(response)
      })
      .catch(err => {
        console.log(`There was an Error...`, err)
        res.status(500).send(err)
      })
  }
}
