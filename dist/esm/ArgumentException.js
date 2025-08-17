/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 * Based upon: https://msdn.microsoft.com/en-us/library/System.Exception%28v=vs.110%29.aspx
 */
import SystemException from './SystemException';
const NAME = 'ArgumentException';
export default class ArgumentException extends SystemException {
    paramName;
    constructor(paramName, message, innerException) {
        if (message && paramName)
            message = `{${paramName}} ${message}`;
        super(message, innerException);
        this.paramName = paramName;
    }
    getName() {
        return NAME;
    }
}
//# sourceMappingURL=ArgumentException.js.map