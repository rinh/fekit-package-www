var _ = require('underscore')

exports.merge = function( req , res , data ) {

    data = data || {}

    return _.extend({
        user : req.user , 
        query : req.query || {} , 
        body : req.body || {} , 
        req : req
    }, data )

}