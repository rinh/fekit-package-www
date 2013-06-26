var sysurl = require('url')
var markdown = require('markdown').markdown;
var request = require('request');

var HTTP_HEAD = "http://l-registry.fe.dev.cn6.qunar.com:3300";

var GET = function( url , cb ) {

    request( HTTP_HEAD + url , function(err, res, body){

        var json = JSON.parse(body);

        if( json.ret ) {
            cb( null , json.data );
        } else {
            cb( json.errmsg , json.data );
        }

    });

};



/*
 * GET home page.
 */

exports.index = function(req, res){

    var keyword = req.query.keyword || "" 

    var renderData = { 
        title: 'Fekit Registry' ,
        keyword: keyword
    };

    GET( '/search/' + keyword , function( err , list ){
        renderData.err = err;
        renderData.list = list;
        res.render('index', renderData );
    });
    
};

exports.view = function(req, res){

    var d = { 
        title: 'Fekit Registry' ,
        keyword: '' ,
        pkgname: req.params.pkgname , 
        version: req.params.version
    };

    var url = '/' + d.pkgname + '/' + d.version + '/'

    GET( '/' + d.pkgname + '/' , function( err , all ){

        d.err = err;
        if( err ) { return res.render('view',d); }

        GET( url , function( err , body ){

            body = body || {};
            d.err = err;

            if( err ) { return res.render('view',d); }

            d.info = body;
            d.readme = body.config ? markdown.toHTML( body.config.README || "" ) : ""
            d.all = all;

            res.render('view', d );

        });

    });    

};



exports.tags = function(req,res){

    var d = {
        title: 'Fekit Registry' ,
        keyword: '',
        tagname: req.query.tagname , 
        list: [] , 
        tags: []
    }

    if( d.tagname ) {

        GET( '/search_tag/' + d.tagname , function( err , list ){
            d.err = err
            d.list = list;

            res.render('tags', d );
        })

    } else {

        _tags_key = {}

        GET( '/search/' , function( err , list ){
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



exports.update_tags = function(req, res){

    var u = sysurl.parse( req.url )

    request( HTTP_HEAD + u.path ).pipe( res );

}



