"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.controller = void 0;
require("reflect-metadata");
var AppRouter_1 = require("../../AppRouter");
function controller(routePrefix) {
    return function (target) {
        var router = AppRouter_1.AppRouter.getInstance();
        Object.getOwnPropertyNames(target.prototype).forEach(function (key) {
            var routeHandler = target.prototype[key];
            var path = Reflect.getMetadata('path', target.prototype, key);
            var method = Reflect.getMetadata('method', target.prototype, key);
            if (path) {
                // Inside router is definition of values that's are possible and TS check if MethodsEnum are valid.
                // So when we add value (like testTest = "testTest"), this will be considered error because there is no testTest in router definition
                router[method]("".concat(routePrefix).concat(path), routeHandler);
            }
        });
    };
}
exports.controller = controller;
