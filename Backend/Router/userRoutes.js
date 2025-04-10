const express = require('express')
const CMS_DB = require('../db/CmsDB')

const userRoutes = express.Router()

userRoutes.post("/new" ,  (req , res) => {
    res.send("add")
    const { name , familly , pass , email , avatart } = req.body

    CMS_DB.query(`INSERT INTO user (id, name, familly, avatar, password, email) VALUES (NULL , '${name}' , '${familly}' , '${avatart}' , '${pass}' , '${email}')` , (err , res) => {
        if(err) {
            throw err
        } else {
            return ("Add \n" , res)
        }
    })

})


userRoutes.get("/get-all" ,  (req , res) => {

    CMS_DB.query("SELECT * FROM `user` WHERE 1", (err , result) => {
        if(err) {
            throw err
        } else {
            console.log(result)

            res.send(JSON.stringify(result))
        }
    })

})


module.exports = userRoutes