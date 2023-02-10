"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.sanphamsua = void 0;
var core_1 = require("@angular/core");
var sanphamsua = /** @class */ (function () {
    function sanphamsua(d) {
        this.d = d;
        this.sp = [{}];
    }
    sanphamsua.prototype.ngOnInit = function () { };
    sanphamsua.prototype.spSua = function (sp) {
        this.d.suaSanPham(sp).subscribe(function (data) {
            alert('Sửa thành công');
        });
    };
    __decorate([
        (0, core_1.Input)()
    ], sanphamsua.prototype, "sp");
    sanphamsua = __decorate([
        (0, core_1.Component)({
            selector: 'sanphamsua',
            templateUrl: './sua.html',
            styles: ["\n    "]
        })
    ], sanphamsua);
    return sanphamsua;
}());
exports.sanphamsua = sanphamsua;
