var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  
  let dataArr=[
    {name: "Tin_Godlike",age:12},
    {name: "Hello World", age:13}
  ];
 
  res.json({
    data: dataArr
  })
});

module.exports = router;
