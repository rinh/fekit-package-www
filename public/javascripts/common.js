(function(){

$("#search").keydown(function(evt){
    if( evt.which == 13 ) {
        var keyword = $.trim( $(this).val() );
        window.location = "/?keyword=" + keyword;
        return false;
    }
});

})();