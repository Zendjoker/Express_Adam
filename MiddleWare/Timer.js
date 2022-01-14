const close = (req,res,next) =>{
    let dat = newDate()
    let day = dat.getDay()
    if (day==0||day==6||hours<9||hours<17) {
        res.send("Arjaa Ghodwa")
    } else {
        next();
    }
}
module.exports=close