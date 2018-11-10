var express = require('express');
var router = express.Router();
var Users=require('../models/user');
         


/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Google Scolar' }); 
});
router.get('/login',function(req,res){          
	res.render('login');                        
});
router.get('/signup',function(req,res){       
	res.render('signup');                     
});
router.get('/site',function(req,res){          
	res.render('site');                        
});

/* POST */

router.post('/signup',function(req,res){      // terminal ma display garcha signup ko  and database ma save gareko 
	console.log('request.....', req.body);
	var user = new Users({                   //export wala aarko user obj garako
		username: req.body.username,
		password: req.body.password,
		repassword: req.body.password
	});

	var promise=user.save() 
	promise.then((user) => {                  //return gareko save gare pachi
		console.log('user signed up with values',user);
	});
});


router.post('/login',function(req,res){
	if(req.body.username && req.body.password){
		
	Users.findOne({
	   username:req.body.username,                               //export gareko User
	   password:req.body.password},
	    function(err, user){
		   console.log('logged in user is...',user);
		    // res.redirect('/index');
		   }); 
}
     else{ console.log('not  a valid Id ');}
});








module.exports = router;
