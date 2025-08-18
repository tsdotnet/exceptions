import ArgumentException from './ArgumentException.js';

/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 * Based upon: https://msdn.microsoft.com/en-us/library/System.Exception%28v=vs.110%29.aspx
 */
const NAME = 'ArgumentNullException';
class ArgumentNullException extends ArgumentException {
    constructor(paramName, message = (paramName ? `{${paramName}}` : 'Argument') + ' is null (or undefined).', innerException) {
        super(paramName, message, innerException);
    }
    getName() {
        return NAME;
    }
}

export { ArgumentNullException as default };
//# sourceMappingURL=ArgumentNullException.js.map
