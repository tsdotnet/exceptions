/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 * Based upon: https://msdn.microsoft.com/en-us/library/System.Exception%28v=vs.110%29.aspx
 */
import ArgumentException from './ArgumentException';
const NAME = 'ArgumentNullException';
export default class ArgumentNullException extends ArgumentException {
    constructor(paramName, message = (paramName || 'Argument ') + 'is null (or undefined).', innerException) {
        super(paramName, message, innerException);
    }
    getName() {
        return NAME;
    }
}
//# sourceMappingURL=ArgumentNullException.js.map