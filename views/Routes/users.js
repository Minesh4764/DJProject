var  express = require('express');
var router = express.Router();


router.get('/',function(req,res){

   // res.send('respond with a resource');
      var name = req.user.displayName;
    res.send(name);


});








module.exports = router;