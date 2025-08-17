/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 * Based upon: https://msdn.microsoft.com/en-us/library/System.Exception%28v=vs.110%29.aspx
 */
const NAME = 'Exception';
export default class Exception {
    message;
    innerException;
    name;
    stack;
    constructor(message = '', innerException) {
        this.message = message;
        this.innerException = innerException;
        this.name = this.getName();
        try {
            const stack = eval('new Error()')
                .stack?.replace(/^Error\n/, '').replace(/(.|\n)+\s+at new.+/, '') || '';
            this.stack = this.toStringWithoutBrackets() + stack;
        }
        catch {
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
//# sourceMappingURL=Exception.js.map