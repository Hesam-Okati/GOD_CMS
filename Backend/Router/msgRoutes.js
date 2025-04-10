const express = require('express')
const CMS_DB = require('../db/CmsDB')

const msgRoutes = express.Router()

msgRoutes.get('/' , (req , res) => {

    CMS_DB.query(`SELECT * FROM massage WHERE 1` , (err , result) => {
        if(err) {
            console.log("MSG service have some error . \n" , err)
        } else {
            res.send(result)
        }
    })

})

module.exports = msgRoutes