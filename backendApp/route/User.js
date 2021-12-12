const express=require('express')
const router = express.Router();

const connection= require('./config')


//HTTP[GET]/
router.get('/',(req,res)=>{
let sql = `SELECT * FROM dangnhap`;
connection.query(sql, (error, results, fields) => {
  if (error) {
    return console.error(error.message);
  }
  return res.json(results)
});


})
//HTTP[GET]/:id
router.get('/:id',(req,res)=>{
    const id=req.params.id
    let sql = `SELECT * FROM dangnhap where Username='${id}'`;
    connection.query(sql, (error, results, fields) => {
      if (error) {
        return console.error(error.message);
      }
      return res.json(results)
    });
    
    })

    //HTTP[POST] -- signup---
router.post('/signup',(req,res)=>{
  const { Email,Password,FullName,Phone,Address,Username,}=req?.body

  let sql = `INSERT INTO dangnhap VALUES ('${Username}','${Password}','${FullName}','${Phone}','${Address}',1,'${Email}','')`;
  connection.query(sql, function (err, result) {
    console.log(err)
    if (err) 
    {

      return res.status(400).json({success: false, message: err?.sqlMessage})
    };
    return res.status(200).json({success: true, message: "created"})
  });
})

module.exports =router;