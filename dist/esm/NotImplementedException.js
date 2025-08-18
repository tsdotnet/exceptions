import SystemException from './SystemException.js';

/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 * Based upon: https://msdn.microsoft.com/en-us/library/System.Exception%28v=vs.110%29.aspx
 */
const NAME = 'NotImplementedException';
class NotImplementedException extends SystemException {
    getName() {
        return NAME;
    }
}

export { NotImplementedException as default };
//# sourceMappingURL=NotImplementedException.js.map
