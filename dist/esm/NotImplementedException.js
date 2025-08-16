"use strict";
/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 * Based upon: https://msdn.microsoft.com/en-us/library/System.Exception%28v=vs.110%29.aspx
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const SystemException_1 = tslib_1.__importDefault(require("./SystemException"));
const NAME = 'NotImplementedException';
class NotImplementedException extends SystemException_1.default {
    getName() {
        return NAME;
    }
}
exports.default = NotImplementedException;
//# sourceMappingURL=NotImplementedException.js.map