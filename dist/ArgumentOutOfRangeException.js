"use strict";
/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 * Based upon: https://msdn.microsoft.com/en-us/library/System.Exception%28v=vs.110%29.aspx
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const ArgumentException_1 = (0, tslib_1.__importDefault)(require("./ArgumentException"));
const NAME = 'ArgumentOutOfRangeException';
class ArgumentOutOfRangeException extends ArgumentException_1.default {
    constructor(paramName, actualValue, message = ' ', innerException) {
        super(paramName, `(${actualValue}) ` + message, innerException);
        this.actualValue = actualValue;
    }
    getName() {
        return NAME;
    }
}
exports.default = ArgumentOutOfRangeException;
//# sourceMappingURL=ArgumentOutOfRangeException.js.map