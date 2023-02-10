"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.HighlightDirective = exports.AppComponent = void 0;
var animations_1 = require("@angular/animations");
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.isOpen = true;
        this.myCheck = true;
        this.anh = '../assets/img/thien.jpg';
        this.thuthu = 'color:red;';
        this.ngaysinh = new Date(2001, 6, 4);
        this.format = 'shortDate';
        this.tiente = 1000000;
        this.thien1 = "";
        this.thien2 = "123";
        this.tuyettuyet = ['1', '2', '3', '4'];
        this.khoakhoa = 3;
        this.sp = [{}];
    }
    AppComponent.prototype.toggle = function () {
        this.isOpen = !this.isOpen;
    };
    AppComponent.prototype.thien = function () {
        console.log('Tuyết Thất Hứa Quá Đi');
    };
    AppComponent.prototype.thienthien = function (event) {
        console.log(event.target.value);
    };
    AppComponent.prototype.ganSP = function (sp) {
        this.sp = sp;
    };
    AppComponent = __decorate([
        (0, core_1.Component)({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./chinh.css'],
            animations: [(0, animations_1.trigger)('openClose', [
                    // ...  
                    (0, animations_1.state)('open', (0, animations_1.style)({
                        height: '200px',
                        opacity: 1,
                        backgroundColor: 'yellow'
                    })),
                    (0, animations_1.state)('closed', (0, animations_1.style)({
                        height: '100px',
                        opacity: 0.8,
                        backgroundColor: 'blue'
                    })),
                    (0, animations_1.transition)('open => closed', [
                        (0, animations_1.animate)('1s')
                    ]),
                    (0, animations_1.transition)('closed => open', [
                        (0, animations_1.animate)('0.5s')
                    ]),
                ]),
            ]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
var HighlightDirective = /** @class */ (function () {
    function HighlightDirective(el) {
        this.el = el;
        this.el.nativeElement.style.color = 'yellow';
    }
    HighlightDirective.prototype.onMouseEnter = function () {
        this.highlight('yellow');
    };
    HighlightDirective.prototype.onMouseLeave = function () {
        this.highlight('');
    };
    HighlightDirective.prototype.highlight = function (color) {
        this.el.nativeElement.style.backgroundColor = color;
    };
    __decorate([
        (0, core_1.HostListener)('mouseenter')
    ], HighlightDirective.prototype, "onMouseEnter");
    __decorate([
        (0, core_1.HostListener)('mouseleave')
    ], HighlightDirective.prototype, "onMouseLeave");
    HighlightDirective = __decorate([
        (0, core_1.Directive)({
            selector: '[apphighlight]'
        })
    ], HighlightDirective);
    return HighlightDirective;
}());
exports.HighlightDirective = HighlightDirective;
