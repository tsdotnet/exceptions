import SystemException from './SystemException.js';

/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 * Based upon: https://msdn.microsoft.com/en-us/library/System.Exception%28v=vs.110%29.aspx
 */
const NAME = 'InvalidOperationException';
class InvalidOperationException extends SystemException {
    getName() {
        return NAME;
    }
}

export { InvalidOperationException as default };
//# sourceMappingURL=InvalidOperationException.js.map
