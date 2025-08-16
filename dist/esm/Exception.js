/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 * Based upon: https://msdn.microsoft.com/en-us/library/System.Exception%28v=vs.110%29.aspx
 */
const NAME = 'Exception';
/*
 * NOTE:
 * An 'Error' is an implementation that may vary per platform.
 * Using instanceof is only assured if not extending from Error.
 */
/**
 * Represents errors that occur during application execution.
 */
export default class Exception {
    message;
    innerException;
    name;
    stack;
    /**
     * Initializes a new instance of the Exception class with a specified error message and optionally a reference to the inner exception that is the cause of this exception.
     * @param message
     * @param innerException
     */
    constructor(message = '', innerException) {
        this.message = message;
        this.innerException = innerException;
        this.name = this.getName();
        // Node has a .stack, let's use it...
        try {
            // To avoid unnecessary imports, use eval.
            // tslint:disable-next-line:no-eval
            const stack = eval('new Error()')
                .stack?.replace(/^Error\n/, '').replace(/(.|\n)+\s+at new.+/, '') || '';
            this.stack = this.toStringWithoutBrackets() + stack;
        }
        catch {
            this.stack = '';
        }
    }
    /**
     * The string representation of the Exception instance.
     */
    toString() {
        return `[${this.toStringWithoutBrackets()}]`;
    }
    /**
     * A string representation of the error type.
     */
    getName() {
        return NAME;
    }
    toStringWithoutBrackets() {
        const m = this.message;
        return this.name + (m ? ': ' + m : '');
    }
}
//# sourceMappingURL=Exception.js.map