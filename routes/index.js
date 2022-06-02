var express = require('express');
var hbs = require('express-hbs');
var path = require('path');
var router = express.Router();
var app = express();
const userController = require('../controller/controllerUser');
const motoController = require('../controller/moToController')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Hello' });
});
router.get('/signup', function(req, res, next) {
  res.render('signup', { title: 'Hello' });
});
router.post('/login', async function(req, res, next) {
  const {email,username,password} = req.body;   
  const check = await userController.login(email,password);
  if(check){
    res.redirect('/admin');
  } else {
    const erro = 'Sai tên đăng nhập hoặc mật khẩu';
    res.render('login',{Erro:erro});
  }
  // res.json({status: check});
});
router.post('/signup', async function(req, res, next) {
  const {email,username,password,config_password} = req.body;
  const check = await userController.checkregister(email);
  console.log(check + "");
  // const check1 = false;
  // if(!check1){
  //   if(check){
  //     const erro = 'Tài khoản đã tồn tại';
  //     res.render('signup',{Erro:erro});
  //   }
  //   if(email || username || password || config_password==''){
  //     const erro = 'Có giá trị đang trống';
  //     res.render('signup',{Erro:erro});
  //   }
  //   if(password != config_password){
  //     const erro = 'Mật khẩu xác nhận không khớp';
  //     res.render('signup',{Erro:erro}); 
  //   } else {
  //     const register = await userController.register(email,username,password);
  //     res.redirect('/login');
  //   }
  // }
  }  
);
router.get('/admin', function(req, res, next) {
  res.render('partials/main', { title: 'Hello' });
});
router.get('/nav', function(req, res, next) {
  res.render('partials/nav', { title: 'Hello'});
});
router.post('/admin', async function(req, res, next) {
  const {maXe,tenXe,loaixe,hinhXe,soLuong,giaXe,ngayNhap,tinhTrang,moTa} = req.body;   
  const check = await motoController.addMoto(maXe,tenXe,loaixe,hinhXe,soLuong,giaXe,ngayNhap,tinhTrang,moTa);
  if(check){
    res.redirect('/admin');
    console.log(check + "");
  } else {
    const erro = 'Dữ liệu không đúng định dạng';
    res.render('admin',{Erro:erro});
  }
  // res.json({status: check});
});
module.exports = router;
