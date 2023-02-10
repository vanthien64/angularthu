"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var thien_component_1 = require("./thien.component");
var forms_1 = require("@angular/forms");
var form_1 = require("./form");
var http_1 = require("@angular/common/http");
var sanphamthem_1 = require("./sanphamthem");
var sanphamsua_1 = require("./sanphamsua");
var sanphamlist_1 = require("./sanphamlist");
var loaisanpham_1 = require("./loaisanpham");
var xoasanpham_1 = require("./xoasanpham");
var animations_1 = require("@angular/platform-browser/animations");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        (0, core_1.NgModule)({
            declarations: [
                app_component_1.AppComponent,
                thien_component_1.AppComponentt,
                app_component_1.HighlightDirective,
                form_1.DangnhapComponent,
                loaisanpham_1.loaisanpham,
                sanphamlist_1.sanphamlist,
                sanphamsua_1.sanphamsua,
                sanphamthem_1.sanphamthem,
                xoasanpham_1.sanphamxoa,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                http_1.HttpClientModule,
                animations_1.BrowserAnimationsModule
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
