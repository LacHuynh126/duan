const async = require('hbs/lib/async');
const seviceMoto = require('../sevice/seviceMoto');

exports.addMoto = async (maXe,tenXe,loaixe,hinhXe,soLuong,giaXe,ngayNhap,tinhTrang,moTa) => {
    const moto = await seviceMoto.addMoto(maXe,tenXe,loaixe,hinhXe,soLuong,giaXe,ngayNhap,tinhTrang,moTa);
    return true;
}