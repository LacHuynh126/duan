var express = require('express');
var router = express.Router();
const userController = require('../controller/controllerUser');
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});
router.post('/login', async function(req, res, next) {
    const {email,username,password} = req.body;    
    const check = await userController.login(email,username,password);
    res.json({status: check});
});
router.post('/register', async function(req, res, next) {
    const {email,username,password} = req.body;
    const register = await userController.register(email,username,password);
    res.json(register);   
});
module.exports = router;