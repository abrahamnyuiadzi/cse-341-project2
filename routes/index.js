
const { passport } = require('passport');
const router = require("express").Router();



router.use('/' , require('./swagger'))
router.use('/users', require('./users.js'));
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
