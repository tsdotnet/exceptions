/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 * Based upon: https://msdn.microsoft.com/en-us/library/System.Exception%28v=vs.110%29.aspx
 */
import SystemException from './SystemException';
const NAME = 'NullReferenceException';
export default class NullReferenceException extends SystemException {
    getName() {
        return NAME;
    }
}
//# sourceMappingURL=NullReferenceException.js.map