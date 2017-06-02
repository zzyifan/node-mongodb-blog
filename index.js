var path = require('path');
var express = require('express');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
var flash = require('connect-flash');
var config = require('config-lite')(__dirname);
var routes = require('./routes');
var pkg = require('./package');

var app = express();

// 设置模块目录
app.set('views', path.join(__direname, 'views'));

// 设置模板引擎 ejs
app.set('view engine', 'ejs');

// 设置静态文件目录
app.use(express.static(path.join(__dirname, 'public')));

// session 中间件
app.use(session({
    name: config.session.key,
    secret: config.session.secret,
    resave: true,
    saveUninitialized: false,
    cookie: {
        maxAge: config.session.maxAge
    },
    store: new MongoStore({
        url: config.mongodb
    })
}));

// flash 中间件，用来显示通知
app.use(flash());

// 路由
routes(app);

// 监听端口, 启动程序
app.listen(config.port, function(){
    console.log(`${pkg.name} listening on port ${cofnig.port}`);
});