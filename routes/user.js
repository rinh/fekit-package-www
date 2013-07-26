var layout = require('./layout');
var http = require('./http');
var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;

passport.serializeUser(function(user, done) {
    done( null, user.name );
});


passport.deserializeUser(function( username , done ) {
    done( null , username );
});


passport.use(new LocalStrategy(
    function(username, password, done) {
        http.PUT( '/user/signin' , {
            username : username , 
            password : password
        } , function( err , user ){
            done( null , user , err )
        })
    }
));

exports.signup = function( req , res ) {

    http.PUT( '/user/signup' , {
        username : req.body.username ,
        password : req.body.password
    } , function( err , user ) {

        if( err ) {
            res.render('signup', layout.merge(req,res,{
                errmsg : err 
            }))
        } else {
            res.render('signup', layout.merge(req,res,{
                msg : '注册成功，请<a href="/signin">登录</a>'
            }))
        }

    })

}


exports.changepwd = function( req , res ) {

    http.PUT( '/user/changePwd' , {
        username : req.user ,
        origin_password : req.body.oripassword , 
        new_password : req.body.password
    }, function( err , body ){

        if( err ) {
            res.render('changepwd', layout.merge(req,res,{
                errmsg : err 
            }))
        } else {
            res.render('changepwd', layout.merge(req,res,{
                msg : '修改成功.'
            }))
        }

    })

}


