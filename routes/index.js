
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Fekit Registry' });
};

exports.view = function(req, res){
  res.render('view', { title: 'Fekit Registry' });
};