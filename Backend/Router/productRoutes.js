const express = require('express')
const CMS_DB = require('../db/CmsDB')

const productRoutes = express.Router()


productRoutes.get("/", (req, res) => {

    CMS_DB.query("SELECT * FROM `products` WHERE 1", (err, result) => {
        if (err) {
            console.log("Your Program have err \n\n\n", err)
        } else {
            res.send(JSON.stringify(result))
        }
    })
})


productRoutes.post("/add", (req, res) => {

    const { id, title, img_url, count, price, status, isInstock, desc } = req.body

    CMS_DB.query(`INSERT INTO products VALUES (NULL , '${title}' , '${img_url}' , ${count} , ${price} , '${status}' , '${isInstock}' , '${desc}')`, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
})

productRoutes.put("/edit", (req, res) => {
    const { id, title, img_url, count, price, status, isInstock, desc } = req.body

    CMS_DB.query(`
UPDATE products SET
    id = NULL,
    title = '${title}',
    img_url = '/assets/image/lt2.jfif',
    count = ${count},
    price = ${price},
    status = ${status},
    isInstock = '${isInstock}'
    desc = '${desc}'
WHERE 1` , (err, result) => {
        if (err) {
            console.log("Your Program have any err \n\n\n", err)
        } else {
            console.log("Product Update .")
            res.send(result)
                }
            }
         )
    }
)

module.exports = productRoutes