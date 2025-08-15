"use strict";
/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 * Based upon: https://msdn.microsoft.com/en-us/library/System.Exception%28v=vs.110%29.aspx
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const SystemException_1 = tslib_1.__importDefault(require("./SystemException"));
const NAME = 'ArgumentException';
class ArgumentException extends SystemException_1.default {
    paramName;
    // For simplicity and consistency, lets stick with 1 signature.
    constructor(paramName, message, innerException) {
        if (message && paramName)
            message = `{${paramName}} ${message}`;
        super(message, innerException);
        this.paramName = paramName;
    }
    getName() {
        return NAME;
    }
}
exports.default = ArgumentException;
//# sourceMappingURL=ArgumentException.js.map