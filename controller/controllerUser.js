const async = require('hbs/lib/async');
const seviceUser = require('../sevice/seviceUser');
exports.login = async (email,password) => {
    const user = await seviceUser.login(email);
    console.log(user + "");
    if(!user) return false;
    if(user.password != password) return false;
    return true;
}
exports.register = async (email,username,password) => {
    const user = await seviceUser.register(email,username,password);
    return true;
}
exports.checkregister = async (email) => {
    const user = await seviceUser.login(email);
    console.log(user + "");
    if(user) return false;
    console.log("tai khoan ton tai roi")
}