var syspath = require('path')
var fs = require('fs')
var _ = require('underscore')

exports.merge = function( req , res , data ) {

    data = data || {}

    // logo 
    var files = fs.readdirSync( syspath.join( __dirname , '../public/logo' ) ) 
    var list = _.filter( files , function( file ) {
        var ext = syspath.extname( file ).toLowerCase()
        return ext == '.jpg' || ext == '.png' || ext == 'gif'
    })

    console.info( list )

    var logo = list[ Math.floor( Math.random() * list.length ) ]

    return _.extend({
        user : req.user , 
        query : req.query || {} , 
        body : req.body || {} , 
        req : req , 
        logo : logo
    }, data )

}