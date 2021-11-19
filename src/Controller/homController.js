import express from "express";

let homeControl  = (req,res) => {
    return res.render('index.ejs')
}

module.exports ={
    homeControl
}