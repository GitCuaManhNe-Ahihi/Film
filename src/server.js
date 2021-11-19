import express from "express";
import configViewsEngine from "./Config/configViewsEngine";
import initWebRouter from "./Router/web";
import path from 'path'
import dotenv from 'dotenv'

dotenv.config()
const app = express()
const port = process.env.PORT

app.use(express.urlencoded({extended:true})) // lay data tu client
app.use(express.json())

configViewsEngine(app)

initWebRouter(app)

app.listen(port,() => {
    console.log(`server run on http://localhost:${port}`)
})
