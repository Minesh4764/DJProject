var  express = require('express');
var router = express.Router();


router.get('/',function(req,res){

   // res.send('respond with a resource');
    res.json({user:{name:req.user.displayName,
                            image:req.user.image}});


});








module.exports = router;