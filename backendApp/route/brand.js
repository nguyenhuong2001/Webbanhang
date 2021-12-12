const express=require('express')
const router = express.Router();

const connection= require('./config')



router.get('/',(req,res)=>{
    let sql = `SELECT * FROM nhacc`;
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
    let sql = `SELECT * FROM nhacc where TenNcc='${id}'`;
    connection.query(sql, (error, results, fields) => {
      if (error) {
        return console.error(error.message);
      }
      return res.json(results)
    });
})



module.exports = router;