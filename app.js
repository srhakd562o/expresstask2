const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({extended:false}))

app.use('/add-product', (req, res, next) => {
    console.log("In the middleware");
    res.send('<form action="/product" method="post"><input type="text" name="title" placeholder="Title"> <br> <br>'  +
        '<input type="number" name="sizeOfProduct" placeholder="Size"><button type="submit">Add Product</button></form>');
});
app.use('/product',(req,res,next)=>{
    console.log(req.body)
    res.redirect
});
app.use('/', (req,res,next)=>{
    console.log("You are in root routes middleware");
    res.send("<h1>Hello Root routes</h1>")
})
app.listen(3000);
