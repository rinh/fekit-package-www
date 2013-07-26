var _ = require('underscore')
var sysurl = require('url')
var request = require('request');

var HTTP_HEAD = exports.HTTP_HEAD = "http://localhost:3300";

exports.GET = function( url , cb ) {

    request( HTTP_HEAD + url , function(err, res, body){

        var json = JSON.parse(body);

        if( json.ret ) {
            cb( null , json.data );
        } else {
            cb( json.errmsg , json.data );
        }

    });

};

exports.PUT = function( url , data , cb ) {

    request.put( HTTP_HEAD + url , {
        form : data 
    } , function(err, res, body){
        var json = JSON.parse(body);

        if( json.ret ) {
            cb( null , json.data );
        } else {
            cb( json.errmsg , json.data );
        }

    });

}

exports.layout = function( data , req , res ) {

    return _.extend( data , {
        user : req.user
    })

}

exports.request = request;