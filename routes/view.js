
/*
 * GET view
 */

exports.view = function(req, res){
  res.render('view', { title: 'Fekit Registry' });
};