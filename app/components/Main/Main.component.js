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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var github_service_1 = require("../../services/github.service");
require("rxjs/add/operator/map");
var MainComponent = (function () {
    function MainComponent(_githubService) {
        this._githubService = _githubService;
        this.user = false;
    }
    MainComponent.prototype.searchUser = function () {
        var _this = this;
        this._githubService.updateUser(this.username);
        this._githubService.getUser().subscribe(function (user) {
            _this.user = user;
        });
        this._githubService.getRepos().subscribe(function (repos) {
            _this.repos = repos;
        });
    };
    return MainComponent;
}());
MainComponent = __decorate([
    core_1.Component({
        selector: 'main',
        templateUrl: 'components/Main/Main.component.html',
        styleUrls: ['components/Main/Main.component.css']
    }),
    __metadata("design:paramtypes", [github_service_1.GithubService])
], MainComponent);
exports.MainComponent = MainComponent;
//# sourceMappingURL=Main.component.js.map