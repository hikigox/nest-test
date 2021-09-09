"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const cat_controller_1 = require("./cat/cat.controller");
const cat_module_1 = require("./cat/cat.module");
const logger_moddleware_1 = require("./logger.moddleware");
let AppModule = class AppModule {
    configure(consumer) {
        consumer
            .apply(logger_moddleware_1.logger)
            .exclude({ path: 'cat', method: common_1.RequestMethod.POST })
            .forRoutes(cat_controller_1.CatController);
    }
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [cat_module_1.CatModule],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map