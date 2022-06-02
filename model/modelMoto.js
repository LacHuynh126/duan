var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

var MotoSchema = new mongoose.Schema({
  id: { type: ObjectId },
  maXe: {type: String},
  tenXe: {type:String},
  loaixe:{type:String},
  hinhXe:{type:String},
  soLuong:{type:String},
  giaXe:{type:String},
  ngayNhap:{type:String},
  ngayXuat:{type:String},
  tinhTrang:{type:String},
  moTa:{type:String}
});
module.exports = mongoose.model('motos', MotoSchema);