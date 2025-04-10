// Therty Party Modules
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

// Local Modules
const userRoutes = require('./Router/userRoutes')
const productRoutes = require('./Router/productRoutes')
const msgRoutes = require('./Router/msgRoutes')
const SettingsRoutes = require('./Router/SettingRoutes')


const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended : false }))

app.get('/' , (req , res)=>{
   res.send('hello from simple server :)')
})


app.use("/api/user/" , userRoutes)
app.use("/api/products/" , productRoutes)
app.use("/api/massages/" , msgRoutes)
app.use("/api/settings/" , SettingsRoutes)




app.listen(3001 , () => {
    console.log('Server is run on 3001')
})