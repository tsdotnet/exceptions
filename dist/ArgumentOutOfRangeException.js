/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 * Based upon: https://msdn.microsoft.com/en-us/library/System.Exception%28v=vs.110%29.aspx
 */
import ArgumentException from './ArgumentException';
const NAME = 'ArgumentOutOfRangeException';
export class ArgumentOutOfRangeException extends ArgumentException {
    constructor(paramName, actualValue, message = ' ', innerException) {
        super(paramName, `(${actualValue}) ` + message, innerException);
        this.actualValue = actualValue;
    }
    getName() {
        return NAME;
    }
}
export default ArgumentOutOfRangeException;
//# sourceMappingURL=ArgumentOutOfRangeException.js.map