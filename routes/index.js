var _ = require('underscore')
var sysurl = require('url')
var markdown = require('markdown').markdown;
var http = require('./http');
var layout = require('./layout');

/*
 * GET home page.
 */

exports.index = function(req, res){

    var keyword = req.query.keyword || "" 

    var d = layout.merge( req , res , {
        keyword : keyword
    })

    http.GET( '/search/' + keyword , function( err , list ){
        d.err = err;
        d.list = list;
        res.render('index', d );
    });
    
};

exports.view = function(req, res){

    var d = layout.merge( req , res , { 
        pkgname: req.params.pkgname , 
        version: req.params.version
    });

    var url = '/' + d.pkgname + '/' + d.version + '/'

    http.GET( '/' + d.pkgname + '/' , function( err , all ){

        d.err = err;
        if( err ) { return res.render('view',d); }

        http.GET( url , function( err , body ){

            body = body || {};
            d.err = err;

            if( err ) { return res.render('view',d); }

            d.info = body;
            d.readme = body.config ? markdown.toHTML( body.config.README || "" ) : ""
            d.all = all;

            http.GET( '/star/find/' + d.pkgname , function( err , starinfo ) {
                d.star = starinfo || {};
                res.render('view', d ); 
            })

        });

    });    

};



exports.tags = function(req,res){

    var d = layout.merge( req, res , {
        tagname: req.query.tagname , 
        list: [] , 
        tags: []
    })

    if( d.tagname ) {

        http.GET( '/search_tag/' + d.tagname , function( err , list ){
            d.err = err
            d.list = list;

            res.render('tags', d );
        })

    } else {

        _tags_key = {}

        http.GET( '/search/' , function( err , list ){
            d.err = err

            for( var i = 0; i < list.length; i++ ) {
                var pkg = list[i];
                var ts = ( pkg.tags || [] );
                for( var j = 0; j < ts.length; j++ ) {
                    var t = ts[j];
                    if( !_tags_key[t] ) {
                        _tags_key[t] = {
                            name : t , 
                            count : 1
                        }
                        d.tags.push( _tags_key[t] );
                    } else {
                        _tags_key[t].count++;
                    }
                }
            }

            res.render('tags', d );
        });

    }

}


exports.forword = function(req, res){
    var u = sysurl.parse( req.url )
    http.request( http.HTTP_HEAD + u.path ).pipe( res );
}

exports.forword_post = function(req, res){
    var u = sysurl.parse( req.url )
    http.request.put( http.HTTP_HEAD + u.path , {
        form : req.body
    }).pipe( res );
}


exports.renderView = function( name , checkLogin ) {
    return function( req , res ) {
        if( checkLogin && !req.user ) {
            res.redirect('/signin?ret=' + req.path )
        } else {
            res.render( name , layout.merge( req , res ) )
        }
    }
}
