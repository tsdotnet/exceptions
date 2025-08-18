import SystemException from './SystemException.js';

/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 * Based upon: https://msdn.microsoft.com/en-us/library/System.Exception%28v=vs.110%29.aspx
 */
const NAME = 'NullReferenceException';
class NullReferenceException extends SystemException {
    getName() {
        return NAME;
    }
}

export { NullReferenceException as default };
//# sourceMappingURL=NullReferenceException.js.map
