var HTTP_HEAD = "http://l-registry.fe.dev.cn6.qunar.com:3300/"

var db = {};

db.http = function( url , data , cb ){
	if( typeof data == 'function' ) { cb = data; data = {}; }
	$.ajax({
		url : HTTP_HEAD + url , 
		data : data , 
		dataType : 'json' ,
		success : function ( data , textStatus , xhr ){
			if( data.ret ) {
				cb( null , data );
			} else {
				alert( data.errmsg );
			}
		}
	});
}


db.search = function( keyword , cb ) {
	db.http('/search/' + ( keyword || "" ) , cb);
}

db.view = function( packageName , cb ) {
	if( !packageName ) { return cb('请输入组件名称'); }
	db.http('/' + packageName , cb);
}