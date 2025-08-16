/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 * Based upon: https://msdn.microsoft.com/en-us/library/System.Exception%28v=vs.110%29.aspx
 */
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "tslib", "./ArgumentException"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const tslib_1 = require("tslib");
    const ArgumentException_1 = tslib_1.__importDefault(require("./ArgumentException"));
    const NAME = 'ArgumentNullException';
    class ArgumentNullException extends ArgumentException_1.default {
        constructor(paramName, message = (paramName ? `{${paramName}}` : 'Argument') + ' is null (or undefined).', innerException) {
            super(paramName, message, innerException);
        }
        getName() {
            return NAME;
        }
    }
    exports.default = ArgumentNullException;
});
//# sourceMappingURL=ArgumentNullException.js.map