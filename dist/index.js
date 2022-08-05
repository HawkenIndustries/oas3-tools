'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMiddleware = exports.expressAppConfig = void 0;
const express_app_config_1 = require("./middleware/express.app.config");
function expressAppConfig(definitionPath, appOptions) {
    return new express_app_config_1.ExpressAppConfig(definitionPath, appOptions);
}
exports.expressAppConfig = expressAppConfig;
function getMiddleware(definitionPath, appOptions) {
    let exp = new express_app_config_1.ExpressAppConfig(definitionPath, appOptions);
    return exp.getMiddleware();
}
exports.getMiddleware = getMiddleware;
//# sourceMappingURL=index.js.map