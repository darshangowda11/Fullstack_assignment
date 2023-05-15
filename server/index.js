require("dotenv").config()
const db = require("./db")
const express = require("express")
const app = express()
const cors = require("cors");
const port = process.env.PORT || 8000
const loginRoutes=require("./routes/Login")
const registerRoutes=require("./routes/Register")

//middlewares
app.use(cors());
app.use(express.json());

//routes

app.use(loginRoutes)
app.use(registerRoutes)

//server listen
app.listen(port, () => {
    console.log(`listening on port ${port}`)
})