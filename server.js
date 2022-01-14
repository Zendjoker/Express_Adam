const express = require("express")
const app = express
const PORT = 5500
//Middleware import 
const close = require('./MiddleWare/Timer');
app.use(close)

//Home.Html---Path ------
app.get("/Home", (req, res) => {
    res.sendFile(__dirname+'Pages\Home.html')}
);
//Contact Us.Html---Path ----
app.get('/Contactus',(req,res)=>{
    res.sendFile(__dirname+'Pages\Contact us.html')}
);
//OurService.html ---Path----
app.get('/OurServices',(req,res)=>{
    res.sendFile(__dirname+"Pages\Our Services.html")}
);

app.listen(PORT,err=>err?console.log(err):console.log(`server is running on port ${PORT}`))