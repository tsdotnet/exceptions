/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 * Based upon: https://msdn.microsoft.com/en-us/library/System.Exception%28v=vs.110%29.aspx
 */
import SystemException from './SystemException';
const NAME = 'ArgumentException';
export default class ArgumentException extends SystemException {
    // For simplicity and consistency, lets stick with 1 signature.
    constructor(paramName, message, innerException) {
        paramName = paramName ? '{' + paramName + '} ' : '';
        super(paramName + (message || ''), innerException);
        this.paramName = paramName;
    }
    getName() {
        return NAME;
    }
}
//# sourceMappingURL=ArgumentException.js.map