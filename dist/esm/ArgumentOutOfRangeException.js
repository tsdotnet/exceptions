import ArgumentException from './ArgumentException.js';

/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 * Based upon: https://msdn.microsoft.com/en-us/library/System.Exception%28v=vs.110%29.aspx
 */
const NAME = 'ArgumentOutOfRangeException';
class ArgumentOutOfRangeException extends ArgumentException {
    actualValue;
    constructor(paramName, actualValue, message = ' ', innerException) {
        super(paramName, `(${actualValue}) ` + message, innerException);
        this.actualValue = actualValue;
    }
    getName() {
        return NAME;
    }
}

export { ArgumentOutOfRangeException as default };
//# sourceMappingURL=ArgumentOutOfRangeException.js.map
