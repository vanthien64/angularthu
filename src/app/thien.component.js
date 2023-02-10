"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppComponentt = void 0;
var core_1 = require("@angular/core");
var AppComponentt = /** @class */ (function () {
    function AppComponentt() {
        this.username = 'thi';
        this.hoatran = '';
    }
    AppComponentt.prototype.ngOnInit = function () { };
    AppComponentt.prototype.xuly = function (data) {
        this.hoatran = this.username;
    };
    AppComponentt = __decorate([
        (0, core_1.Component)({
            selector: 'thu',
            template: "\n    <h2>Single-slot content projection</h2>\n    <form #vuong=\"ngForm\" (ngSubmit)=xuly(vuong.value) >\n    <input name=\"un\" [(ngModel)]=\"username\" class=\"form-control\" required minlength=\"6\" #loi=\"ngModel\"> \n    <button> sumbit </button>\n    <p>You typed: {{username}}</p>\n    <p>{{vuong.value.required}}</p>\n    <p *ngIf=\"loi.invalid\">L\u1ED6I R\u1ED2I CDL</p>\n    <p *ngIf=\"loi.errors?.['minlength']\">Nh\u1EADp \u0111\u1EE7 {{loi.errors?.['minlength'].requiredLength}} k\u00FD t\u1EF1, hi\u1EC7n t\u1EA1i cd ch\u1EC9 m\u1EDBi nh\u1EADp {{loi.errors?.['minlength'].actualLength}} \n    cd c\u1EA7n nh\u1EADp th\u00EAm {{loi.errors?.['minlength'].requiredLength - loi.errors?.['minlength'].actualLength}} </p>\n    </form>\n    <p>{{hoatran}}</p>\n    <ng-content></ng-content>\n  ",
            styles: ['.ng-valid{color:red;}']
        })
    ], AppComponentt);
    return AppComponentt;
}());
exports.AppComponentt = AppComponentt;
