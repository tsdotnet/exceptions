"use strict";
/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 * Based upon: https://msdn.microsoft.com/en-us/library/System.Exception%28v=vs.110%29.aspx
 */
Object.defineProperty(exports, "__esModule", { value: true });
const NAME = 'Exception';
class Exception {
    constructor(message = '', innerException) {
        var _a;
        this.message = message;
        this.innerException = innerException;
        this.name = this.getName();
        try {
            const stack = ((_a = eval('new Error()')
                .stack) === null || _a === void 0 ? void 0 : _a.replace(/^Error\n/, '').replace(/(.|\n)+\s+at new.+/, '')) || '';
            this.stack = this.toStringWithoutBrackets() + stack;
        }
        catch (_b) {
            this.stack = '';
        }
    }
    toString() {
        return `[${this.toStringWithoutBrackets()}]`;
    }
    getName() {
        return NAME;
    }
    toStringWithoutBrackets() {
        const m = this.message;
        return this.name + (m ? ': ' + m : '');
    }
}
exports.default = Exception;
//# sourceMappingURL=Exception.js.map