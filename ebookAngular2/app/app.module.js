"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
var store_1 = require("@ngrx/store");
var effects_1 = require("@ngrx/effects");
var app_component_1 = require("./app.component");
var home_component_1 = require("./home.component");
var about_component_1 = require("./about.component");
var reducer_1 = require("./reducer");
var app_service_1 = require("./app.service");
var app_effects_1 = require("./app.effects");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule,
            router_1.RouterModule.forRoot([
                { path: '', component: home_component_1.HomeComponent },
                { path: 'about', component: about_component_1.AboutComponent }
            ]),
            store_1.StoreModule.provideStore({
                books: reducer_1.reducer
            }),
            effects_1.EffectsModule.run(app_effects_1.AppEffects),
            http_1.HttpModule
        ],
        declarations: [app_component_1.AppComponent, home_component_1.HomeComponent, about_component_1.AboutComponent],
        providers: [app_service_1.AppService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map