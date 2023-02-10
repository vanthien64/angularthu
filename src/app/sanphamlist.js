"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.sanphamlist = void 0;
var core_1 = require("@angular/core");
var sanphamlist = /** @class */ (function () {
    function sanphamlist(d) {
        this.d = d;
        this.chonSP = new core_1.EventEmitter();
        this.listSanPham = [{}];
    }
    sanphamlist.prototype.suaSP = function (sp) {
        this.chonSP.emit(sp);
    };
    sanphamlist.prototype.ngOnInit = function () {
        var _this = this;
        this.d.getSanPham().subscribe(function (data) { return _this.listSanPham = data; });
    };
    sanphamlist.prototype.xoaSP = function (id) {
        if (confirm('Xóa thật không') == true) {
            this.d.xoaSanPham(id).subscribe(function (data) { return alert('Xóa thành công'); });
        }
    };
    __decorate([
        (0, core_1.Output)()
    ], sanphamlist.prototype, "chonSP");
    sanphamlist = __decorate([
        (0, core_1.Component)({
            selector: 'sanphamlist',
            template: "<p>List s\u1EA3n ph\u1EA9m work!</p>\n    <p *ngFor=\"let sp of listSanPham let i=index\">\n    {{sp.tensp}} - {{sp.giasp}} - {{sp.ngay}}\n</p>\n<p> {{listSanPham[0].tensp}}</p>\n<img src=\"{{listSanPham[0].hinh}}\" alt=\"\">\n<p *ngFor=\"let sp of listSanPham\">\n{{sp.tensp}} - {{sp.giasp}} - {{sp.ngay}} \n<span href=\"#\" (click)=\"suaSP(sp)\">S\u1EEDa</span> &nbsp;  \n<a href=\"#\" (click)=\"xoaSP(sp.id)\">X\u00F3a</a> \n</p>\n    ",
            styles: ["\n    "]
        })
    ], sanphamlist);
    return sanphamlist;
}());
exports.sanphamlist = sanphamlist;
