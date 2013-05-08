(function(){

db.search = function(keyword, cb){
	cb([
		{ name : 'xx' , version:'0.1.1', description:'hoho'},
		{ name : 'xx2' , version:'0.1.1', description:'hoho'}
	])
}

var template = '\
	<table class="table">\
		<thead>\
			<th>名称</th>\
			<th>最近版本</th>\
			<th>描述</th>\
		</thead>\
		<tbody>\
		{{#list}}\
			<tr>\
				<td><a target="_blank" href="/view?name={{name}}">{{name}}</a></td>\
				<td>{{version}}</td>\
				<td>{{description}}</td>\
			</tr>\
		{{/list}}\
		</tbody>\
	</table>\
';

var tmpl = Hogan.compile( template );

$("#search").keydown(function(evt){
	if( evt.which == 13 ) {
		var keyword = $.trim( $(this).val() );
		db.search( keyword , function(data){
			var html = tmpl.render({
				list : data 
			});
			$("#result").html( html );
		});
	}
});

})();