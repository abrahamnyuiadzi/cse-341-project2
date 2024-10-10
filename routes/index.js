

const router = require("express").Router();
const passport = require("passport");


router.use('/' , require('./swagger'))
router.use("/users", require("./users"));
router.get('/', (req,res)=>{
  
    res.send('hello word')
});



router.get('/login', passport.authenticate('github'),(req,res)=>{});

router.get('/logout',function (req,res, next){
    req.logOut(function(err){
        if (err){return next(err);}
        res.redirect('/')
    });


});


module.exports = router ;
