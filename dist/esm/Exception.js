/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 * Based upon: https://msdn.microsoft.com/en-us/library/System.Exception%28v=vs.110%29.aspx
 */
const NAME = 'Exception';
class Exception {
    message;
    innerException;
    name;
    stack;
    constructor(message = '', innerException) {
        this.message = message;
        this.innerException = innerException;
        this.name = this.getName();
        this.stack = this.captureStackTrace();
    }
    captureStackTrace() {
        try {
            const testError = new Error();
            if (typeof testError.stack === 'string' && testError.stack.length > 0) {
                const stack = testError.stack
                    .replace(/^Error\n/, '')
                    .replace(/(.|\n)+\s+at new.+/, '') || '';
                return this.toStringWithoutBrackets() + stack;
            }
            else {
                return this.toStringWithoutBrackets() + '\n    (stack trace not available in this environment)';
            }
        }
        catch {
            return this.toStringWithoutBrackets() + '\n    (unable to capture stack trace)';
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

export { Exception as default };
//# sourceMappingURL=Exception.js.map
