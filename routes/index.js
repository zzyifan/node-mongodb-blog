module.exports = function(app){
    app.get('/', function(req, res){
        res.redirect('post');
    });
    app.use('signup', require('./signup'));
    app.use('signup', require('./signup'));
    app.use('signout', require('./signout'));
    app.use('posts', require('./posts'));
}