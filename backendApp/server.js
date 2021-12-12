const express= require('express')
const product=require("./route/Product")
const user= require("./route/User")
const brand= require("./route/brand")
const order= require("./route/order")
const app=express();
const mysql = require('mysql');
const PORT=5000;
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'cosmetic'
});
connection.connect(function(err) {
    if (err) {
      return console.error('error: ' + err.message);
    }
  
    console.log('Connected to the MySQL server.');
  });
app.use(express.json())

app.use('/product',product);
app.use('/user',user);
app.use('/order',order);
app.use('/brand',brand);


app.listen(PORT,()=>console.log("listen port:"+PORT));