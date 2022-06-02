const modelUser = require('../model/modelUsers');
var bcrypt = require('bcrypt');
exports.login = async (email) => {
    const user = await modelUser.findOne({email:email});
    console.log(user);
    return user;
}
exports.register = async (email,username,password) => {
    const users = await modelUser.create({email:email,username:username,password:password});
    console.log(users);
    return users;
}