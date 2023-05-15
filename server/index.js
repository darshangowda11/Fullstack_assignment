require("dotenv").config()
const db=require("./db")
const express = require("express")
const app = express()
const cors = require("cors");
const port=process.env.PORT || 8001


//middlewares
app.use(cors());
app.use(express.json());

//routes
app.get("/", (req, res) => {
    res.send("hello")
})



//server listen
app.listen(port, () => {
    console.log(`listening on port ${port}`)
})