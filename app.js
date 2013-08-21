
/**
 * Module dependencies.
 */

var express = require('express')
  , params = require('express-params')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , layout = require('./routes/layout')
  , passport = require('passport')
  , path = require('path');

var app = express();

// all environments
app.set('port', 8800); //process.env.PORT || 80);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.query());
app.use(express.cookieParser());
app.use(express.bodyParser());
app.use(express.session({ secret: 'keyboard cat' }));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.methodOverride());
app.use(app.router);


// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/view/:pkgname/:version', routes.view);
app.get('/update_tags/:name', routes.forword);
app.get('/tags', routes.tags);
app.get('/createdoc/:pkgname/:version', routes.forword);
app.get('/:pkgname/-/:tarname', routes.forword);

app.post('/star/add',routes.forword_post);
app.get('/star/find/:name',routes.forword);

app.get('/signup', routes.renderView('signup') );
app.get('/signin', routes.renderView('signin') );
app.get('/changepwd', routes.renderView('changepwd', true) );
app.post('/user/changepwd', user.changepwd );
app.post('/user/signup', user.signup);
app.post('/user/signin', function( req , res , next ) {
    passport.authenticate('local',function(err, user, info) {
        var d = layout.merge( req , res , {
                    errmsg : info
                })

        if( !user ) {
            res.render('signin', d)
        } else {
            req.logIn( user , function(err){
                if(err) {
                    d.errmsg = err.toString()
                    res.render('signin', d)
                } else {
                    if( req.body.ret ) {
                        res.redirect( req.body.ret );
                    } else {
                        res.redirect('/');
                    }
                }
            })
        }
    })( req , res , next )
});
app.get('/user/signout', function(req, res){
  req.logout();
  res.redirect('/');
});

// test user login
app.get('/go',function(req,res,next){
    req.login({ name : 'hao.lin' },function(){
        console.info( arguments )
        res.redirect('/view/jsex/0.0.2')
    })
})

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
