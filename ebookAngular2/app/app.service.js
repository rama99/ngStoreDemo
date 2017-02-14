"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
require("rxjs/add/observable/from");
require("rxjs/add/observable/of");
var AppService = (function () {
    function AppService(http) {
        this.http = http;
    }
    AppService.prototype.loadBooks = function () {
        var data = [
            { id: 1, title: 'Book1 title', description: 'Book2 desc here', author: 'Kishore', price: 9.9 },
            { id: 2, title: 'Book 2 title', description: 'Book1 desc here.....', author: 'Rama ', price: 4.9 }
        ];
        /* return this.http.get('')
                         .map(data => data.json())
                         .catch(error => error); */
        return Observable_1.Observable.of(data);
    };
    return AppService;
}());
AppService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map