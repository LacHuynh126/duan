const async = require('hbs/lib/async');
const modelMoto = require('../model/modelMoto');
exports.addMoto = async (maXe,tenXe,loaixe,hinhXe,soLuong,giaXe,ngayNhap,tinhTrang,moTa) => {
    const moTo = await modelMoto.create({
        maXe:maXe,
        tenXe:tenXe,
        loaiXe: loaixe,
        hinhXe:hinhXe,
        soLuong:soLuong,
        giaXe:giaXe,
        ngayNhap:ngayNhap,
        tinhTrang:tinhTrang,
        moTa:moTa
    })
    return moTo;
}
