var express = require('express');
var router = express.Router();
//render ra form bằng get method
router.get('/add',(req,res)=>{
    res.render('mobile/add'); //render file "view/mobile/add.hbs"
});

//lấy dữ liệu từ form bằng post method và render ra file view mới
router.post('/view',(req,res)=>{
    //lưu dữ liệu nhập từ form
    var data = req.body;
    //render ra file view và gửi kèm dữ liệu nhập từ form
    res.render('mobile/view',{
        mobile:data
    });
});
router.get('/', function(req, res,next){
res.redirect('/mobile/add');
});

module.exports = router;
