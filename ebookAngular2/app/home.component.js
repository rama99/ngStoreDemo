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
var store_1 = require("@ngrx/store");
var action_types_1 = require("./action-types");
var HomeComponent = (function () {
    function HomeComponent(store) {
        this.store = store;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.store.dispatch(action_types_1.loadBooks());
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        selector: '',
        template: "<h2> Books List </h2>\n\n            <table class=\"table table-striped\">\n            <thead>\n                <tr>\n                <th><th>\n                <th>Title</th>\n                <th>Price($)</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let book of (store.select('books') | async)?.books\">\n                    <th><th>\n                    <td>{{book.title}}</td>\n                    <td>{{book.price | currency}}</td>\n                </tr>\n            </tbody>\n            </table>  \n        "
    }),
    __metadata("design:paramtypes", [store_1.Store])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map