"use strict";
/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 * Based upon: https://msdn.microsoft.com/en-us/library/system.systemexception%28v=vs.110%29.aspx
 */
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
//# sourceMappingURL=SystemException.js.map