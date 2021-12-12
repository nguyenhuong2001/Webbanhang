const express=require('express')
const router = express.Router();

const connection= require('./config')

router.get('/',(req,res)=>{
    let sql = `SELECT * FROM sanpham`;
    connection.query(sql, (error, results, fields) => {
      if (error) {
        return console.error(error.message);
      }
      return res.json(results)
    });

})
/*

{PhotoMain:main.png,Photo:[{photo:img.png},{photo:img.png},{photo:img.png},{photo:img.png},]}


*/
router.get('/body',(req,res)=>{
  let sql = `SELECT * FROM sanpham where MaLSP = 2`;
  connection.query(sql, (error, results, fields) => {
    if (error) {
      return console.error(error.message);
    }
    return res.json(results)
  });

})

router.get('/skin',(req,res)=>{
  let sql = "SELECT * FROM sanpham WHERE MaLSP = 1";
  connection.query(sql, (error, results, fields) => {
    if (error) {
      return console.error(error.message);
    }
    return res.json(results)
  });

})

router.get('/hair',(req,res)=>{
  let sql = "SELECT * FROM `sanpham` where `MaLSP`=3";
  connection.query(sql, (error, results, fields) => {
    if (error) {
      return console.error(error.message);
    }
    return res.json(results)
  });

})

router.get('/makeup',(req,res)=>{
  let sql = "SELECT * FROM sanpham where MaLSP=4";
  connection.query(sql, (error, results, fields) => {
    if (error) {
      return console.error(error.message);
    }
    return res.json(results)
  });

})

router.get('/:id',(req,res)=>{
  let sql = `SELECT * FROM sanpham WHERE SpID=${req.params.id}`;
  connection.query(sql, (error, results, fields) => {
    if (error) {
      return console.error(error.message);
    }
    return res.json(results[0])
  });

})

module.exports = router;