/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 * Based upon: https://msdn.microsoft.com/en-us/library/system.systemexception%28v=vs.110%29.aspx
 */
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "tslib", "./Exception"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const tslib_1 = require("tslib");
    const Exception_1 = tslib_1.__importDefault(require("./Exception"));
    const NAME = 'SystemException';
    class SystemException extends Exception_1.default {
        getName() {
            return NAME;
        }
    }
    exports.default = SystemException;
});
//# sourceMappingURL=SystemException.js.map