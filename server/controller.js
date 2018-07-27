module.exports = {
  getInventory: (req, res) => {
    let db = req.app.get('db')
    db.get_inventory().then(response =>{
      res.status(200).send(response)
    })
  },

  addProduct: (req, res) => {
    let { name, price, imageurl } = req.body
    let db = req.app.get('db')
    db.create_product([name, price, imageurl]).then(response => {
      res.status(200).send(response)
    })
  }
}