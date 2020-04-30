/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 * Based upon: https://msdn.microsoft.com/en-us/library/System.Exception%28v=vs.110%29.aspx
 */
import SystemException from './SystemException';
const NAME = 'NotImplementedException';
export class NotImplementedException extends SystemException {
    getName() {
        return NAME;
    }
}
export default NotImplementedException;
//# sourceMappingURL=NotImplementedException.js.map