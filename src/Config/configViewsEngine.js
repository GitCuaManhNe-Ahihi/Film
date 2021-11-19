import express from "express";
import { path } from "express/lib/application";
const configViewsEngine  = (app) => {
       app.use(express.static('./src/public'))
       app.set('views engine','ejs')
       app.set('views','./src/Views')
  
}
export default configViewsEngine