import Exception from './Exception.js';

/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 * Based upon: https://msdn.microsoft.com/en-us/library/system.systemexception%28v=vs.110%29.aspx
 */
const NAME = 'SystemException';
class SystemException extends Exception {
    getName() {
        return NAME;
    }
}

export { SystemException as default };
//# sourceMappingURL=SystemException.js.map
