/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 * Based upon: https://msdn.microsoft.com/en-us/library/System.Exception%28v=vs.110%29.aspx
 */
import SystemException from './SystemException';
export default class ArgumentException extends SystemException {
    readonly paramName: string;
    constructor(paramName: string, message?: string, innerException?: any);
    protected getName(): string;
}
