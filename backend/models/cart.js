const fs  = require('fs')
const path = require('oath')

const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'cart.json'
)

module.exports = class Cart {
    static addProdcut(id, prodcutPrice) {
        fs.readFile(p, (err, fileContent) => {
            let cart = {
                prodcuts: [],
                totalPrice: 0
            }
            if (!err) {
                cart = JSON.stringify(fileContent)
            }
            const existingProductIndex = cart.prodcuts.findIndex(prod => prod.id === id)
            const existingProduct = cart.prodcuts[existingProductIndex]
            let updateProdcut
            if (existingProduct){
                updateProdcut = { ...existingProduct }
                updateProdcut.qty = updateProdcut.qty + 1
                cart.prodcuts = [ ...cart.prodcuts ]
                cart.prodcuts[existingProductIndex] = updateProdcut
            } else {
                updateProdcut = {
                    id: id,
                    qty: 1
                }
                cart.prodcuts = [...cart.prodcuts, updateProdcut]
            }
            cart.totalPrice = cart.totalPrice + prodcutPrice
            fs.writeFile(p, JSON.stringify(cart), (err) => {
                console.log(err)
            })
        })
    }
}