const express = require("express")
const pug = require("pug")


const app = express()
app.set("view engine","pug")

//app.use(express.static(__dirname+"/public"))


app.get("/about", (req,res)=>{

    res.render("about", {
        title: "About Page"
    })

})


app.get("/", (req,res)=>{

    res.render("home", {
        title: "Home Page"
    })

})
console.log("listening on port 5000");

app.listen(5000)