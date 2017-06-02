var express = require('express');
var router = express.Router();

var checkLogin = require('../middlewares/check').checklogin;

// GET 文章页
router.get('/', function(req, res, next){
    res.send(req.flash());
});

// POST 发表文章
router.post('/', function(req, res, next){
    res.send(req.flahs());
});

// GET 发表文章页
router.get('/create', checkLogin, function(req, res, next){
    res.send(req.flash());
});

// GET 单独一篇文章页
router.get('/:postId', function(req, res, next){
    res.send(req.flash());
});

// GET 更新文章
router.get('/:postId/edit', checkLogin, function(req, res, next){
    res.send(req.flash());
});

// POST 更新文章页
router.post('/:postId/edit', checkLogin, function(req, res, next){
    res.send(req.flash());
});

// GET 删除文章
router.get('/:postId/remove', checkLogin, function(req, res, next){
    res.send(req.flash());
});

// POST 创建留言
 router.post('/:postId/comment', checkLogin, function(req, res, next){
     res.send(req.flash());
 });

// GET 删除留言
router.get('/:postId/comment/:commentId/remove', checkLogin, function(req, res, next){
    res.send(req.flash());
});

module.exports = router;