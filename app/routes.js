"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var Main_component_1 = require("./components/Main/Main.component");
exports.routes = [
    { path: '', pathMatch: 'full', component: Main_component_1.MainComponent }
];
exports.routing = router_1.RouterModule.forRoot(exports.routes, { useHash: true });
//# sourceMappingURL=routes.js.map