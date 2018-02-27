const express = require("express")
const pug = require("pug")

const port =process.env.PORT || 3000


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

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
    
})