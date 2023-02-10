"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.loaisanpham = void 0;
var core_1 = require("@angular/core");
var loaisanpham = /** @class */ (function () {
    function loaisanpham(_http) {
        this._http = _http;
        this.listLoai = [{}];
    }
    loaisanpham.prototype.ngOnInit = function () {
        var _this = this;
        this._http.get('http://localhost:3000/loaisp').subscribe(function (data) {
            _this.listLoai = data;
        });
    };
    loaisanpham = __decorate([
        (0, core_1.Component)({
            selector: 'loaisanpham',
            template: "<p>Lo\u1EA1i s\u1EA3n ph\u1EA9m work!</p>\n  <p *ngFor=\"let loai of listLoai; let i=index\"> {{loai.tenLoai}}</p>\n            \n  ",
            styles: ["\n  "]
        })
    ], loaisanpham);
    return loaisanpham;
}());
exports.loaisanpham = loaisanpham;
