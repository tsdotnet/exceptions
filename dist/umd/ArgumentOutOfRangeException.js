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
    const NAME = 'ArgumentOutOfRangeException';
    class ArgumentOutOfRangeException extends ArgumentException_1.default {
        actualValue;
        constructor(paramName, actualValue, message = ' ', innerException) {
            super(paramName, `(${actualValue}) ` + message, innerException);
            this.actualValue = actualValue;
        }
        getName() {
            return NAME;
        }
    }
    exports.default = ArgumentOutOfRangeException;
});
//# sourceMappingURL=ArgumentOutOfRangeException.js.map