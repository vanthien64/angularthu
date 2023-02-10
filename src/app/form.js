"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DangnhapComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var forms_2 = require("@angular/forms");
var DangnhapComponent = /** @class */ (function () {
    function DangnhapComponent() {
        this.khoa = '';
    }
    DangnhapComponent.prototype.ngOnInit = function () {
        this.frm1 = new forms_2.FormGroup({
            username: new forms_1.FormControl('teonv', forms_1.Validators.required),
            password: new forms_1.FormControl('123')
        });
    };
    DangnhapComponent.prototype.inrathu = function () {
        this.khoa = this.frm1.value.username;
    };
    DangnhapComponent = __decorate([
        (0, core_1.Component)({
            selector: 'app-dangnhap',
            templateUrl: './dangnhap.component.html',
            styles: ['']
        })
    ], DangnhapComponent);
    return DangnhapComponent;
}());
exports.DangnhapComponent = DangnhapComponent;
