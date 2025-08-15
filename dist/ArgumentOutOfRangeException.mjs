/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 * Based upon: https://msdn.microsoft.com/en-us/library/System.Exception%28v=vs.110%29.aspx
 */
import ArgumentException from './ArgumentException';
const NAME = 'ArgumentOutOfRangeException';
export default class ArgumentOutOfRangeException extends ArgumentException {
    actualValue;
    constructor(paramName, actualValue, message = ' ', innerException) {
        super(paramName, `(${actualValue}) ` + message, innerException);
        this.actualValue = actualValue;
    }
    getName() {
        return NAME;
    }
}
//# sourceMappingURL=ArgumentOutOfRangeException.js.map