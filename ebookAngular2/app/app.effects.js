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
require("rxjs/add/operator/mergeMap");
var core_1 = require("@angular/core");
var effects_1 = require("@ngrx/effects");
var action_types_1 = require("./action-types");
var app_service_1 = require("./app.service");
var AppEffects = (function () {
    function AppEffects(actions$, appService) {
        var _this = this;
        this.actions$ = actions$;
        this.appService = appService;
        this.loadBooks$ = this.actions$
            .ofType(action_types_1.ActionTypes.LOAD_BOOKS)
            .mergeMap(function () { return _this.appService.loadBooks(); })
            .map(function (books) { return action_types_1.loadBooksSuccess(books); });
    }
    return AppEffects;
}());
__decorate([
    effects_1.Effect(),
    __metadata("design:type", Object)
], AppEffects.prototype, "loadBooks$", void 0);
AppEffects = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [effects_1.Actions,
        app_service_1.AppService])
], AppEffects);
exports.AppEffects = AppEffects;
//# sourceMappingURL=app.effects.js.map